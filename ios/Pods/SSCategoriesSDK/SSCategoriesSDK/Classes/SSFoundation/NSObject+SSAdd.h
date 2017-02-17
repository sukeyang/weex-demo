//
//  NSObject+SSAdd.h
//  12313213
//
//  Created by jiuhao-yangshuo on 16/5/24.
//  Copyright © 2016年 jiuhao. All rights reserved.
//

#import <Foundation/Foundation.h>

@interface NSObject (SSAdd)

- (NSString *)KXjSONString;

//数据的Propertys
- (NSMutableArray *)SSObjcPropertyArray;

@end

@interface NSString (KXJsonObject)

//转为字典
- (id)KXjSONValueObject;

@end
