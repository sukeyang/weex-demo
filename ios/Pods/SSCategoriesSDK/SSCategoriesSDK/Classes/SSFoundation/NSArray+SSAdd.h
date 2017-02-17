//
//  NSArray+SSAdd.h
//  12313213
//
//  Created by jiuhao-yangshuo on 16/5/24.
//  Copyright © 2016年 jiuhao. All rights reserved.
//

#import <Foundation/Foundation.h>

@interface NSArray (SSAdd)

- (id)safeObjectAtIndex:(NSUInteger)index;

- (id)deepCopy;
- (id)mutableDeepCopy;

- (id)trueDeepCopy;
- (id)trueDeepMutableCopy;

/**
 *  随机数
 *
 *  @param randomCount 要几个
 *  @param allNum      0-allNum
 *
 *  @return 数组
 */
+ (NSArray *)fetchRandomCount:(NSInteger)randomCount fromAllNum:(NSInteger)allNum;

//过滤重复
+ (NSArray *)obtainArrayWithoutDuplicates:(NSArray *)origelArray;

@end


@interface NSMutableArray (SSAdd)

+ (NSMutableArray *)randomSortArrayWithArray:(NSMutableArray *)yourMutableArray;//乱序

/**
 *  安全放入对象，对象为空不放入
 *
 *  @param object 对象
 */
- (void)addSafeObject:(id)object;

/**
 *  如果对象为空，就放入空对象占位
 *
 *  @param object 对象
 */
- (void)addIfNilObject:(id)object;

//返回被删除的数据
- (id)removeFirstObject;
@end
