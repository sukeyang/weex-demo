//
//  CommonMacro.h
//  Pods
//
//  Created by yangshuo on 16/7/8.
//
//

#ifndef CommonMacro_h
#define CommonMacro_h

#import "CommonBaseTools.h"

#pragma mark ----------------系统设置相关---------------------------
//版本号对外2.1.6
#define AppBundleVersion				[[[NSBundle mainBundle] infoDictionary] objectForKey:@"CFBundleShortVersionString"]
//对内16 数字
#define AppCFBundleVersion				[[[NSBundle mainBundle] infoDictionary] objectForKey:@"CFBundleVersion"]
//对内6
#define AppDisplayName                   [[[NSBundle mainBundle] infoDictionary] objectForKey:@"CFBundleDisplayName"]
#define AppKeyWindow                    [[UIApplication sharedApplication] keyWindow]
#define APP_DELEGATE                    ((AppDelegate *)[[UIApplication sharedApplication] delegate])

//打开debug 模式
#ifdef DEBUG
#define NSLog(s,...) NSLog(@"%s LINE:%d < %@ >",__FUNCTION__, __LINE__, [NSString stringWithFormat:(s), ##__VA_ARGS__])
#else
#define NSLog(...) {}
//#define NSLog(s,...) NSLog(@"%s LINE:%d < %@ >",__FUNCTION__, __LINE__, [NSString stringWithFormat:(s), ##__VA_ARGS__])

#endif

#pragma mark ----------------判断设置相关---------------------------
//是否为空或是[NSNull null]
#define NotNilAndNull(_ref)  (((_ref) != nil) && (![(_ref) isEqual:[NSNull null]]))
#define IsNilOrNull(_ref)   (((_ref) == nil) || ([(_ref) isEqual:[NSNull null]]))
//字符串是否为空
#define IsStrEmpty(_ref)    (((_ref) == nil) || ([(_ref) isEqual:[NSNull null]]) ||([(_ref)isEqualToString:@""]))
//数组是否为空
#define IsArrEmpty(_ref)    (((_ref) == nil) || ([(_ref) isEqual:[NSNull null]]) ||([(_ref) count] == 0))



#pragma mark ----------------快捷方法相关---------------------------
#define AppStrWithStr(x,y)                    [NSString stringWithFormat:@"%@%@",x,y]
#define AppSystemVersion                       [[[UIDevice currentDevice] systemVersion] intValue]
#define AppNotificationCenter                   ([NSNotificationCenter defaultCenter])
#define AppFileManager                         [NSFileManager defaultManager]
#define AppUserDefaults                       [NSUserDefaults standardUserDefaults]
#define AppStringIsNULL(string)                  [CommonBaseTools isNULLString3:string]


#pragma mark ----------------UI相关---------------------------
#define AlertViewShow(msg) [[[UIAlertView alloc]initWithTitle:@"提示" message:msg delegate:nil cancelButtonTitle:@"取消" otherButtonTitles:@"确定", nil] show];
#define AppImageOfFile(Name)                  ([UIImage imageWithContentsOfFile:[[NSBundle mainBundle] pathForResource:Name ofType:nil]])
#define AppBoldFontWithSize(size)             [UIFont boldSystemFontOfSize:size]
#define AppScreenWidth                         [[UIScreen mainScreen] bounds].size.width
#define AppScreenHeight                        [[UIScreen mainScreen] bounds].size.height
#define AppDisplayScreenHeight                  ([[UIScreen mainScreen] bounds].size.height -64)
#define AppColor(color)                        ([UIColor colorWithHexString:color])
#define AppLoadImage(imageName)                 ([UIImage imageNamed:imageName])
#define AppSystemFontWithSize(size)             ([UIFont systemFontOfSize:size])
#define AppBlodFontWithSize(size)               ([UIFont boldSystemFontOfSize:size])

#pragma mark ----------------BLOCK相关---------------------------
//block 声明
#ifdef NS_BLOCKS_AVAILABLE
typedef void (^AppBasicBlock)(id content);
typedef void (^AppOperationCallBackBlock)(BOOL isSuccess, NSString *errorMsg);
typedef void (^AppContentCallBackBlock)(int flag, id content);
#endif

/**
 Synthsize a weak or strong reference.
 
 Example:
 @weakify(self)
 [self doSomething^{
 @strongify(self)
 if (!self) return;
 ...
 }];
 */
#ifndef weakify
#if DEBUG
#if __has_feature(objc_arc)
#define weakify(object) autoreleasepool{} __weak __typeof__(object) weak##_##object = object;
#else
#define weakify(object) autoreleasepool{} __block __typeof__(object) block##_##object = object;
#endif
#else
#if __has_feature(objc_arc)
#define weakify(object) try{} @finally{} {} __weak __typeof__(object) weak##_##object = object;
#else
#define weakify(object) try{} @finally{} {} __block __typeof__(object) block##_##object = object;
#endif
#endif
#endif

#ifndef strongify
#if DEBUG
#if __has_feature(objc_arc)
#define strongify(object) autoreleasepool{} __typeof__(object) object = weak##_##object;
#else
#define strongify(object) autoreleasepool{} __typeof__(object) object = block##_##object;
#endif
#else
#if __has_feature(objc_arc)
#define strongify(object) try{} @finally{} __typeof__(object) object = weak##_##object;
#else
#define strongify(object) try{} @finally{} __typeof__(object) object = block##_##object;
#endif
#endif
#endif


#pragma mark ---------------安全释放相关---------------------------
#define HTTP_RELEASE_SAFELY(__POINTER) \
{\
if (nil != (__POINTER))\
{\
[__POINTER stop];\
TT_RELEASE_SAFELY(__POINTER);\
}\
}

#if !__has_feature(objc_arc)

/*safe release*/
#undef TT_RELEASE_SAFELY
#define TT_RELEASE_SAFELY(__REF) \
{\
if (nil != (__REF)) \
{\
CFRelease(__REF); \
__REF = nil;\
}\
}

//view安全释放
#undef TTVIEW_RELEASE_SAFELY
#define TTVIEW_RELEASE_SAFELY(__REF) \
{\
if (nil != (__REF))\
{\
[__REF removeFromSuperview];\
CFRelease(__REF);\
__REF = nil;\
}\
}

//释放定时器
#undef TT_INVALIDATE_TIMER
#define TT_INVALIDATE_TIMER(__TIMER) \
{\
[__TIMER invalidate];\
[__TIMER release];\
__TIMER = nil;\
}

#else

/*safe release*/
#undef TT_RELEASE_SAFELY
#define TT_RELEASE_SAFELY(__REF) \
{\
if (nil != (__REF)) \
{\
__REF = nil;\
}\
}

//view安全释放
#define TTVIEW_RELEASE_SAFELY(__REF) \
{\
if (nil != (__REF))\
{\
[__REF removeFromSuperview];\
__REF = nil;\
}\
}

//释放定时器
#define TT_INVALIDATE_TIMER(__TIMER) \
{\
[__TIMER invalidate];\
__TIMER = nil;\
}

#endif

#endif /* CommonMacro_h */
