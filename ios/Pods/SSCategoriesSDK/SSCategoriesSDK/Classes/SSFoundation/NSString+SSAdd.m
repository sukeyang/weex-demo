//
//  NSString+SSAdd.m
//  12313213
//
//  Created by jiuhao-yangshuo on 16/5/24.
//  Copyright © 2016年 jiuhao. All rights reserved.
//

#import "NSString+SSAdd.h"
#import "UIColor+SSAdd.h"
#include <CommonCrypto/CommonDigest.h>
#import "CommonMacro.h"

@implementation NSString (SSAdd)

- (BOOL)containsString:(NSString *)astring {
    BOOL haveString = [self rangeOfString:astring].location != NSNotFound;
    return haveString;
}

- (NSString *)SXstringByReplacingWihtNSRegularExpressionString:(NSString *)expressionString withString:(NSString *)newString {
    NSString *content = self;
    if (!content.length) {
        content = @"";
    } else {
        NSRegularExpression *regularExpretion=[NSRegularExpression regularExpressionWithPattern:expressionString
                                                                                        options:0
                                                                                          error:nil];
        
        content=[regularExpretion stringByReplacingMatchesInString:self options:NSMatchingReportProgress range:NSMakeRange(0, content.length) withTemplate:newString];
    }
    NSLog(@"------%@",content);
    return content;
}


- (NSString *)URLEncoding {
    return [self stringByAddingPercentEscapesUsingEncoding:NSUTF8StringEncoding];
}

- (NSString *)URLDecoding {
    return [self stringByReplacingPercentEscapesUsingEncoding:NSUTF8StringEncoding];
}

- (NSString *)trim {
    return [self stringByTrimmingCharactersInSet:[NSCharacterSet whitespaceAndNewlineCharacterSet]];
}

- (BOOL)isEmpty {
    return [self length] > 0 ? NO : YES;
}

- (NSString *)MD5Hex {
    const char *str = [self UTF8String];
    unsigned char result[CC_MD5_DIGEST_LENGTH];
    CC_MD5(str, (CC_LONG)strlen(str), result);
    
    NSMutableString *ret = [NSMutableString stringWithCapacity:CC_MD5_DIGEST_LENGTH*2];
    for(int i = 0; i<CC_MD5_DIGEST_LENGTH; i++) {
        [ret appendFormat:@"%02x",result[i]];
    }
    return ret;
}


- (CGFloat)heightForFont:(UIFont *)font width:(CGFloat)width {
    CGSize size = [self sizeForFont:font size:CGSizeMake(width, HUGE) mode:NSLineBreakByWordWrapping];
    return size.height;
}

- (CGFloat)widthForFont:(UIFont *)font height:(CGFloat)height {
    CGSize size = [self sizeForFont:font size:CGSizeMake(HUGE, height) mode:NSLineBreakByWordWrapping];
    return size.height;
}

- (CGSize)sizeForFont:(UIFont *)font size:(CGSize)size mode:(NSLineBreakMode)lineBreakMode {
    CGSize result;
    if (!font) font = [UIFont systemFontOfSize:12];
    if ([self respondsToSelector:@selector(boundingRectWithSize:options:attributes:context:)]) {
        NSMutableDictionary *attr = [NSMutableDictionary new];
        attr[NSFontAttributeName] = font;
        if (lineBreakMode != NSLineBreakByWordWrapping) {
            NSMutableParagraphStyle *paragraphStyle = [NSMutableParagraphStyle new];
            paragraphStyle.lineBreakMode = lineBreakMode;
            
            attr[NSParagraphStyleAttributeName] = paragraphStyle;
        }
        CGRect rect = [self boundingRectWithSize:size
                                         options:NSStringDrawingUsesLineFragmentOrigin | NSStringDrawingUsesFontLeading
                                      attributes:attr context:nil];
        result = rect.size;
    } else {
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
        result = [self sizeWithFont:font constrainedToSize:size lineBreakMode:lineBreakMode];
#pragma clang diagnostic pop
    }
    return result;
}

- (unsigned long long)pathFileSize {
    // 计算self这个文件夹\文件的大小
    // 文件管理者
    NSFileManager *mgr = [NSFileManager defaultManager];
    // 文件类型
    NSDictionary *attrs = [mgr attributesOfItemAtPath:self error:nil];
    NSString *fileType = attrs.fileType;
    if ([fileType isEqualToString:NSFileTypeDirectory]) { // 文件夹
        // 获得文件夹的遍历器
        NSDirectoryEnumerator *enumerator = [mgr enumeratorAtPath:self];
        // 总大小
        unsigned long long fileSize = 0;
        // 遍历所有子路径
        for (NSString *subpath in enumerator) {
            // 获得子路径的全路径
            NSString *fullSubpath = [self stringByAppendingPathComponent:subpath];
            fileSize += [mgr attributesOfItemAtPath:fullSubpath error:nil].fileSize;
        }
        return fileSize;
    }
    // 文件
    return attrs.fileSize;
}

//路径
+ (NSString*)appLibraryCachesPath {
    return [NSSearchPathForDirectoriesInDomains(NSCachesDirectory, NSUserDomainMask, YES) firstObject];
}

+ (NSString *)appDocumentsPath {
    return [NSSearchPathForDirectoriesInDomains(NSDocumentDirectory, NSUserDomainMask, YES) firstObject];
}

+ (NSString*)appLibraryPath {
    return [NSSearchPathForDirectoriesInDomains(NSLibraryDirectory, NSUserDomainMask, YES) firstObject];
}

+ (NSString *)appBundleName {
    return [[NSBundle mainBundle] objectForInfoDictionaryKey:@"CFBundleName"];
}

+ (NSString *)appBundleID {
    return [[NSBundle mainBundle] objectForInfoDictionaryKey:@"CFBundleIdentifier"];
}

+ (NSString *)appVersion {
    return [[NSBundle mainBundle] objectForInfoDictionaryKey:@"CFBundleShortVersionString"];
}

+ (NSString *)appBuildVersion {
    return [[NSBundle mainBundle] objectForInfoDictionaryKey:@"CFBundleVersion"];
}

- (BOOL)isEqualToAnonther:(NSString *)anotherString {
    if (IsStrEmpty(self) || IsStrEmpty(anotherString)) {
        return NO;
    }
    return [self isEqualToString:anotherString.lowercaseString];
}

NSString *decimalNumberCalculateWithString(NSString *preValue,NSString *nextValue,CalculateType type) {
    SEL selector;
    switch (type) {
        case CalculateTypePlus: {
            selector = @selector(decimalNumberByAdding:);
            break;
        }
        case CalculateTypeSubtract: {
            selector = @selector(decimalNumberBySubtracting:);
            break;
        }
        case CalculateTypeMutiply: {
            selector = @selector(decimalNumberByMultiplyingBy:);
            break;
        }
        case CalculateTypeDivide: {
            selector = @selector(decimalNumberByDividingBy:);
            break;
        }
    }
    NSDecimalNumber *preNumber = [NSDecimalNumber decimalNumberWithString:preValue];
    NSDecimalNumber *nextNumber = [NSDecimalNumber decimalNumberWithString:nextValue];
    NSDecimalNumber *product = nil;
    if ([preNumber respondsToSelector:selector]) {
        product = [preNumber performSelector:selector withObject:nextNumber];
    }
    return [NSString stringWithFormat:@"%.2f",product.doubleValue];
}

NSString *noDigitsNumberCalculateWithString(NSString *preValue,NSString *nextValue,CalculateType type) {
    NSString *resultValue = decimalNumberCalculateWithString(preValue, nextValue, type);
    return [NSString stringWithFormat:@"%ld",(long)resultValue.integerValue];
}

- (NSString *)formatTwoDigits {
    NSString *priceStr = [NSString stringWithFormat:@"%.2f",[self doubleValue]];
    return priceStr;
}

- (NSMutableAttributedString *)createAttributedStringWithFontSize:(float)fontSize andWithOrigelStrColor:(NSString *)origelStrColor  {
    NSMutableAttributedString *attrituteString = [[NSMutableAttributedString alloc] initWithString:self] ;
    [attrituteString setAttributes:@{NSForegroundColorAttributeName : [UIColor colorWithHexString:origelStrColor], NSFontAttributeName : [UIFont systemFontOfSize:fontSize]} range:NSMakeRange(0, self.length)];
    return attrituteString;
}

@end

@implementation NSMutableAttributedString (SSAdd)

+(NSMutableAttributedString *)replaceRedColorWithNSString:(NSString *)str andUseKeyWord:(NSString *)keyWord andWithFontSize:(float )size andWithFrontColor:(NSString *)frontColor {
    NSMutableAttributedString *attrituteString = [[NSMutableAttributedString alloc] initWithString:str] ;
    NSRange range = [str rangeOfString:keyWord];
    [attrituteString setAttributes:@{NSForegroundColorAttributeName : [UIColor colorWithHexString:frontColor], NSFontAttributeName : [UIFont systemFontOfSize:size]} range:range];
    return attrituteString;
}

+(NSMutableAttributedString *)replaceRedColorWithNSString:(NSString *)str andUseKeyWord:(NSString *)keyWord andWithCsutomFont:(UIFont*)font andWithFrontColor:(NSString *)frontColor {
    NSMutableAttributedString *attrituteString = [[NSMutableAttributedString alloc] initWithString:str] ;
    NSRange range = [str rangeOfString:keyWord];
    [attrituteString setAttributes:@{NSForegroundColorAttributeName : [UIColor colorWithHexString:frontColor], NSFontAttributeName :font} range:range];
    return attrituteString;
}

//描红
+ (NSMutableAttributedString *)replaceRedColorWithNSString:(NSString *)str andOneKeyWord:(NSString *)oneStr oneTextColor:(NSString *)oneTextColor andTwoNSString:(NSString *)twoStr andTwoColor:(NSString *)tColor andWithFontSize:(float)fontSize andWithOrigelStrColor:(NSString *)origelStrColor {
    NSMutableAttributedString *attrituteString = [[NSMutableAttributedString alloc] initWithString:str] ;
    [attrituteString setAttributes:@{NSForegroundColorAttributeName : [UIColor colorWithHexString:origelStrColor], NSFontAttributeName : [UIFont systemFontOfSize:fontSize]} range:NSMakeRange(0, str.length)];
    
    if (oneStr.length) {
        NSRange range = [str rangeOfString:oneStr];
        [attrituteString setAttributes:@{NSForegroundColorAttributeName : [UIColor colorWithHexString:oneTextColor], NSFontAttributeName : [UIFont systemFontOfSize:fontSize]} range:range];
    }
    
    if (twoStr.length) {
        NSRange range2 =  [str rangeOfString:twoStr];
        [attrituteString setAttributes:@{NSForegroundColorAttributeName : [UIColor colorWithHexString:tColor], NSFontAttributeName : [UIFont systemFontOfSize:fontSize]} range:range2];
    }
    return attrituteString;
}


@end
