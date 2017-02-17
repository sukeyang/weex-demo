//
//  NSObject+SSAdd.m
//  12313213
//
//  Created by jiuhao-yangshuo on 16/5/24.
//  Copyright © 2016年 jiuhao. All rights reserved.
//

#import "NSObject+SSAdd.h"
#import <objc/runtime.h>

@implementation NSObject (SSAdd)

//解析
-(NSString *)KXjSONString {
    //    NSJSONWritingPrettyPrinted的意思是将生成的json数据格式化输出 \n
    if ([NSJSONSerialization isValidJSONObject:self]) {
        NSError *error;
        NSData *jsonData = [NSJSONSerialization dataWithJSONObject:self
                                                           options: 0
                                                             error:&error];
        if (!jsonData) {
            NSLog(@"bv_jsonStringWithPrettyPrint: error: %@", error.localizedDescription);
            return @"{}";
        } else {
            return [[NSString alloc] initWithData:jsonData encoding:NSUTF8StringEncoding] ;
        }
    }
    return @"";
}

- (NSMutableArray *)SSObjcPropertyArray {
    if (!self) return nil;
    NSMutableArray *arraySub = [[NSMutableArray alloc] init];
    //    YYClassInfo *info = [YYClassInfo classInfoWithClass: [FeedBackModel class]];
    //    arraySub = info.propertyInfos.allKeys;
    unsigned int propertyCount = 0;
    objc_property_t *properties = class_copyPropertyList([self class], &propertyCount);
    if (properties) {
        for (int i = 0; i< propertyCount; i++) {
            objc_property_t property = properties[i];
            const char *propName = property_getName(property);
            NSString *pName;
            if(propName) {
                const char *name = property_getName(property);
                if (name) {
                    pName = [NSString stringWithUTF8String:name];
                }
                [arraySub addObject:pName];
            }
        }
        free(properties);
    }
    return arraySub;
}
@end


@implementation NSString(KXJsonObject)

//转为字典
- (id)KXjSONValueObject {
    if(self == nil){
        return self;
    }
    //    return [self JSONValue];
    //    NSJSONReadingMutableContainers：返回可变容器，NSMutableDictionary或NSMutableArray。
    //    NSJSONReadingMutableLeaves：返回的JSON对象中字符串的值为NSMutableString
    NSError *error = nil;
    NSString *filterString = [self stringByReplacingOccurrencesOfString:@":null" withString:@":\"\""];
    NSData *data = [filterString  dataUsingEncoding:NSUTF8StringEncoding];
    id myObject = [NSJSONSerialization JSONObjectWithData:data
                                                  options:NSJSONReadingMutableContainers|NSJSONReadingMutableLeaves
                                                    error:&error];
    if (!myObject) {
        NSLog(@"bv_jsonStringWithPrettyPrint: error: %@", error.localizedDescription);
        return @{};
    } else {
        return [myObject mutableCopy];
    }
}

@end

