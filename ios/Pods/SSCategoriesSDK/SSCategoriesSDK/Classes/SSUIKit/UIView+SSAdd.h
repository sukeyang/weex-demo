//
//  UIView+SSAdd.h
//  12313213
//
//  Created by jiuhao-yangshuo on 16/5/24.
//  Copyright © 2016年 jiuhao. All rights reserved.
//

#import <UIKit/UIKit.h>

@interface UIView (SSAdd)

@property (nonatomic) CGPoint frameOrigin;
@property (nonatomic) CGSize frameSize;

@property (nonatomic) CGFloat frameX;
@property (nonatomic) CGFloat frameY;

// Setting these modifies the origin but not the size.
@property (nonatomic) CGFloat frameRight;
@property (nonatomic) CGFloat frameBottom;

@property (nonatomic) CGFloat frameWidth;
@property (nonatomic) CGFloat frameHeight;

@property (nonatomic) CGFloat centerX;
@property (nonatomic) CGFloat centerY;

- (BOOL)containsSubView:(UIView *)subView;
- (BOOL)containsSubViewOfClassType:(id)cs;

- (UIViewController*)viewController;
- (void)removeAllSubviews;
- (UIView *)findFirstResponder;


/**
 *  添加锚点
 *
 *  @param anchorPoint 锚点
 */
- (void)addAnchorPoint:(CGPoint)anchorPoint;

/**
 *  添加边框
 *
 *  @param color 边框颜色
 *  @param width 边框宽度
 */
- (void)addBorderWithColor:(UIColor *)color width:(CGFloat)width;

//截屏
+ (UIImage*)screenshotWithView:(UIView*)view;

@end
