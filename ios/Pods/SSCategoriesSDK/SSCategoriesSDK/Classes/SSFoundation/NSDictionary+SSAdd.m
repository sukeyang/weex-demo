//
//  NSDictionary+SSAdd.m
//  12313213
//
//  Created by jiuhao-yangshuo on 16/5/24.
//  Copyright © 2016年 jiuhao. All rights reserved.
//

#import "NSDictionary+SSAdd.h"

@implementation NSDictionary (SSAdd)


@end


@implementation NSMutableDictionary (SSAdd)

- (void)replaceOldKeyy:(id)oldKey withNewKey:(id)newKey {
    id value = [self objectForKey:oldKey];
    if (value) {
        [self setObject:value forKey:newKey];
        [self removeObjectForKey:oldKey];
    }
}

- (void)setSafeObject:(id)object forKey:(id)key {
    if (object != nil && ![object isEqual:[NSNull null]] && key != nil && ![key isEqual:[NSNull null]]) {
        [self setObject:object forKey:key];
    }
}

- (void)setIfNilObject:(id)object forKey:(id)key {
    [self setObject:[NSNull null] forKey:key];
    [self setSafeObject:object forKey:key];
}
@end
