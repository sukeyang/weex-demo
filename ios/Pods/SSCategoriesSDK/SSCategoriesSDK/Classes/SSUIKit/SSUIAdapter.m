//
//  SSUIAdapter.m
//  podTestLibrary
//
//  Created by jiuhao-yangshuo on 16/5/25.
//  Copyright © 2016年 jiuhao-yangshuo. All rights reserved.
//

#import "SSUIAdapter.h"
#import <Foundation/Foundation.h>
#import <UIKit/UIKit.h>
@implementation SSUIAdapter
 
+ (float)SSUniversalSizeByWidthf320:(float)for320 f375:(float)for375 f414:(float)for414 f768:(float)for768 {
    float UniversalSize = for320;
    float deviceSizeWidth = [UIScreen mainScreen].bounds.size.width;
    if (deviceSizeWidth == 320) {
        UniversalSize = for320;
    } else if (deviceSizeWidth == 375) {
        UniversalSize = for375;
    } else if (deviceSizeWidth == 414) {
        UniversalSize = for414;
    } else {
        UniversalSize = for768;
    }
   
    return UniversalSize;
}

+ (float)SSUniversalSizeByHeightf4:(float)for4 f5:(float)for5 f6:(float)for6 f6p:(float)for6p fPad:(float)forPad {
    float UniversalSize = for4;
    float deviceSizeHeight = [UIScreen mainScreen].bounds.size.height;
    if (deviceSizeHeight == 480) {
        UniversalSize = for4;
    } else if (deviceSizeHeight == 568) {
        UniversalSize = for5;
    } else if (deviceSizeHeight == 667) {
        UniversalSize = for6;
    } else if (deviceSizeHeight == 736) {
        UniversalSize = for6p;
    } else if (deviceSizeHeight == 1024) {
        UniversalSize = forPad;
    } else {
        UniversalSize = forPad;
    }
    return UniversalSize;
}

+ (float)SSUniversalSizeByFontf320:(float)for320 f375:(float)for375 f414:(float)for414 f768:(float)for768 {
    float UniversalSize = for320;
    float deviceSizeWidth = [UIScreen mainScreen].bounds.size.width;
    if (deviceSizeWidth == 320) {
        UniversalSize = for320;
    } else if (deviceSizeWidth == 375) {
        UniversalSize = for375;
    }
    else if (deviceSizeWidth == 414) {
        UniversalSize = for414;
    } else {
        UniversalSize = for768;
    }
     return UniversalSize;
}

+ (float)SSUniversalFont:(float)fontSize {
    float UniversalSize = fontSize;
    float deviceSizeWidth = [UIScreen mainScreen].bounds.size.width;
    if (deviceSizeWidth == 320) {
        UniversalSize = fontSize;
    } else if (deviceSizeWidth == 375) {
        UniversalSize = fontSize;
    } else if (deviceSizeWidth == 414) {
        UniversalSize = ceil(fontSize *414/375);
    } else {
        UniversalSize = ceil(fontSize *768/375);;
    }
    return UniversalSize;
}

+ (float)SSUniversalWidth:(float)with {
    float UniversalSize = with;
    float deviceSizeWidth = [UIScreen mainScreen].bounds.size.width;
    if (deviceSizeWidth == 320) {
        UniversalSize = with;
    } else if (deviceSizeWidth == 375) {
        UniversalSize = with;
    } else if (deviceSizeWidth == 414) {
        UniversalSize = ceil(with *414/375);
    } else {
        UniversalSize = ceil(with *768/375);;
    }
    return UniversalSize;
}
@end
