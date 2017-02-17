//
//  UILabel+SSAdd.h
//  Pods
//
//  Created by yangshuo on 16/12/1.
//
//

#import <UIKit/UIKit.h>

@interface UILabel (SSAdd)

+ (UILabel*)createLabel:(CGRect)rect TextColor:(NSString*)color Font:(UIFont*)font textAlignment:(NSTextAlignment)alignment labTitle:(NSString*)title;

+ (UILabel*)createLabel;
//分割线
+ (UILabel*)createLineLabelInViewHeight:(float)lineHeight;

@end
