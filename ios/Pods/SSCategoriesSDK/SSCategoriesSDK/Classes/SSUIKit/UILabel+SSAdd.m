//
//  UILabel+SSAdd.m
//  Pods
//
//  Created by yangshuo on 16/12/1.
//
//

#import "UILabel+SSAdd.h"
#import "UIColor+SSAdd.h"
#import "CommonMacro.h"

@implementation UILabel (SSAdd)
+ (UILabel*)createLabel:(CGRect)rect TextColor:(NSString*)color Font:(UIFont*)font textAlignment:(NSTextAlignment)alignment labTitle:(NSString*)title {
    UILabel* lab = [[UILabel alloc] initWithFrame:rect];
    lab.textColor = [UIColor colorWithHexString:color];
    lab.font = font;
    lab.textAlignment = alignment;
    if (title) {
        lab.text = title;
    }
    return lab;
}

+ (UILabel*)createLineLabelInViewHeight:(float)lineHeight {
    UILabel* labelLine = [[UILabel alloc] initWithFrame:CGRectMake(0, lineHeight - 0.5, AppScreenWidth, 0.5)];
    return labelLine;
}

+ (UILabel*)createLabel {
    UILabel* lab = [[UILabel alloc] init];
    lab.backgroundColor = [UIColor clearColor];
    lab.textAlignment = NSTextAlignmentLeft;
    lab.text = @"";
    return lab;
}

@end
