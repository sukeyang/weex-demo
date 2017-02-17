//
//  UIControl+PGAdd.h
//  button
//
//  Created by wds on 16/9/8.
//  Copyright © 2016年 JLRC. All rights reserved.
//

#import <UIKit/UIKit.h>
#import <objc/runtime.h>

@interface UIControl (PGAdd)

@property (nonatomic, assign) NSTimeInterval wds_acceptEventInterval;// 可以用这个给重复点击加间隔

@end
