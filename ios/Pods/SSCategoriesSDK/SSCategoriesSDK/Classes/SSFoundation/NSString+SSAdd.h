//
//  NSString+SSAdd.h
//  12313213
//
//  Created by jiuhao-yangshuo on 16/5/24.
//  Copyright © 2016年 jiuhao. All rights reserved.
//

#import <Foundation/Foundation.h>
#import <UIKit/UIKit.h>

typedef NS_ENUM(NSInteger, CalculateType) {
    CalculateTypePlus,//+
    CalculateTypeSubtract,//-
    CalculateTypeMutiply,//x
    CalculateTypeDivide,///
};

@interface NSString (SSAdd)

-(BOOL)containsString:(NSString *)astring;
- (NSString *)SXstringByReplacingWihtNSRegularExpressionString:(NSString *)expressionString withString:(NSString *)newString;
- (NSString *)URLEncoding;
- (NSString *)URLDecoding;
- (NSString *)trim;
- (BOOL)isEmpty;

- (NSString *)MD5Hex;

+ (NSString *)PGStringDate;

//计算高度
- (CGFloat)heightForFont:(UIFont *)font width:(CGFloat)width;
//计算宽度
- (CGFloat)widthForFont:(UIFont *)font height:(CGFloat)height;

- (CGSize)sizeForFont:(UIFont *)font size:(CGSize)size mode:(NSLineBreakMode)lineBreakMode;
//路径文件大小
- (unsigned long long)pathFileSize;
//cache路径
+ (NSString*)appLibraryCachesPath;
//doc文件路径
+ (NSString *)appDocumentsPath;
//lib文件路径
+ (NSString*)appLibraryPath;
//app 名称
+ (NSString *)appBundleName;
+ (NSString *)appBundleID;
+ (NSString *)appVersion;
+ (NSString *)appBuildVersion;
//两位小数
- (NSString *)formatTwoDigits;
//字符串对比
- (BOOL)isEqualToAnonther:(NSString *)anotherString;

- (NSMutableAttributedString *)createAttributedStringWithFontSize:(float)fontSize andWithOrigelStrColor:(NSString *)origelStrColor;
NSString *decimalNumberCalculateWithString(NSString *preValue,NSString *nextValue,CalculateType type);
NSString *noDigitsNumberCalculateWithString(NSString *preValue,NSString *nextValue,CalculateType type);

@end


@interface NSMutableAttributedString (SSAdd)

//替换字体颜色
+(NSMutableAttributedString *)replaceRedColorWithNSString:(NSString *)str andUseKeyWord:(NSString *)keyWord andWithFontSize:(float)size andWithFrontColor:(NSString *)frontColor;
//替换字体颜色和样式
+(NSMutableAttributedString *)replaceRedColorWithNSString:(NSString *)str andUseKeyWord:(NSString *)keyWord andWithCsutomFont:(UIFont*)font andWithFrontColor:(NSString *)frontColor;

+ (NSMutableAttributedString *)replaceRedColorWithNSString:(NSString *)str andOneKeyWord:(NSString *)oneStr oneTextColor:(NSString *)oneTextColor andTwoNSString:(NSString *)twoStr andTwoColor:(NSString *)tColor andWithFontSize:(float)fontSize andWithOrigelStrColor:(NSString *)origelStrColor;

@end
