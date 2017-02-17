//
//  SSUIAdapter.h
//  podTestLibrary
//
//  Created by jiuhao-yangshuo on 16/5/25.
//  Copyright © 2016年 jiuhao-yangshuo. All rights reserved.
//

#import <Foundation/Foundation.h>

//[MKStyleUtil standardLabelStyle:baseInfo withCode:MKFontStyleCode_067]


#define SSGetUniversalSizeByWidth(for320, for375, for414, for768)   [SSUIAdapter SSUniversalSizeByWidthf320:for320 f375:for375 f414:for414 f768:for768]
#define SSGetUniversalSizeByFont(for320, for375, for414, for768)   [SSUIAdapter SSUniversalSizeByFontf320:for320 f375:for375 f414:for414 f768:for768]
#define SSGetDynamicUniversalWidth(fontSize) [SSUIAdapter SSUniversalWidth:fontSize]
#define SSGetDynamicUniversalFont(with) [SSUIAdapter SSUniversalFont:with]
#define SSsystemFontOfSize(fontSize) [UIFont systemFontOfSize:fontSize]

#define SSGetUniversalSizeByHeight(for4, for5, for6, for6p,forPad)   [SSUIAdapter SSUniversalSizeByHeightf4:for4 f5:for5 f6:for6 f6p:for6p fPad:forPad]



@interface SSUIAdapter : NSObject

//宽度
+(float)SSUniversalSizeByWidthf320:(float)for320 f375:(float)for375 f414:(float)for414 f768:(float)for768;
//高度
+(float)SSUniversalSizeByHeightf4:(float)for4 f5:(float)for5 f6:(float)for6 f6p:(float)for6p fPad:(float)forPad;
//字体
+(float)SSUniversalSizeByFontf320:(float)for320 f375:(float)for375 f414:(float)for414 f768:(float)for768;
//比例
+(float)SSUniversalWidth:(float)with;

+(float)SSUniversalFont:(float)fontSize;

@end
