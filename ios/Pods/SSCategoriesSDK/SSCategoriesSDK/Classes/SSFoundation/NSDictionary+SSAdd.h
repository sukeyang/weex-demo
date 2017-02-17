//
//  NSDictionary+SSAdd.h
//  12313213
//
//  Created by jiuhao-yangshuo on 16/5/24.
//  Copyright © 2016年 jiuhao. All rights reserved.
//

#import <Foundation/Foundation.h>

@interface NSDictionary (SSAdd)


@end


@interface NSMutableDictionary (SSAdd)

- (void)replaceOldKeyy:(id)oldKey withNewKey:(id)newKey;

/**
 *  安全新增一个键值对（键与值都不为空）
 *
 *  @param object 值
 *  @param key    键
 */
- (void)setSafeObject:(id)object forKey:(id)key;

/**
 *  如果值为空，则放入空对象
 *
 *  @param object 值
 *  @param key    键
 */
- (void)setIfNilObject:(id)object forKey:(id)key;

@end
