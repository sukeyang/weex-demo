//
//  NSArray+SSAdd.m
//  12313213
//
//  Created by jiuhao-yangshuo on 16/5/24.
//  Copyright © 2016年 jiuhao. All rights reserved.
//

#import "NSArray+SSAdd.h"

@implementation NSArray (SSAdd)

- (id)safeObjectAtIndex:(NSUInteger)index {
    if (self.count > index) {
        return [self objectAtIndex:index];
    }
    return nil;
}

- (id)deepCopy {
    return [[NSArray alloc] initWithArray:self copyItems:YES];
}

- (id)mutableDeepCopy {
    return [[NSMutableArray alloc] initWithArray:self copyItems:YES];
}

- (id)trueDeepCopy {
    return [NSKeyedUnarchiver unarchiveObjectWithData:[NSKeyedArchiver archivedDataWithRootObject:self]];
}

- (id)trueDeepMutableCopy {
    return [[NSKeyedUnarchiver unarchiveObjectWithData:[NSKeyedArchiver archivedDataWithRootObject:self]] mutableCopy];
}

+ (NSArray *)fetchRandomCount:(NSInteger)randomCount fromAllNum:(NSInteger)allNum {
    NSInteger cellNum = randomCount;
    NSInteger wordCount = allNum;
    NSMutableSet *idstrings = [[NSMutableSet alloc] init];
    while (idstrings.count < cellNum) {
        NSInteger randomInt = arc4random() % wordCount;
        [idstrings addObject:@(randomInt)];
    }
    NSArray *returnArray = [idstrings allObjects];
    return returnArray;
}


+ (NSArray *)obtainArrayWithoutDuplicates:(NSArray *)origelArray {
    NSOrderedSet *orderedSet = [NSOrderedSet orderedSetWithArray:origelArray];
    NSArray *arrayWithoutDuplicates = [orderedSet array];
    return arrayWithoutDuplicates;
}

@end


@implementation NSMutableArray (SSAdd)

//随机排序一个数组
+ (NSMutableArray *)randomSortArrayWithArray:(NSMutableArray *)yourMutableArray {
    NSUInteger count = [yourMutableArray count];
    for (NSUInteger i = 0; i < count; ++i) {
        // Select a random element between i and end of array to swap with.
        NSInteger nElements = count - i;
        NSInteger n = (arc4random() % nElements) + i;
        [yourMutableArray exchangeObjectAtIndex:i withObjectAtIndex:n];
    }
    return yourMutableArray;
}

- (void)addSafeObject:(id)object {
    if (object != nil && ![object isEqual:[NSNull null]]) {
        [self addObject:object];
    }
}

- (void)addIfNilObject:(id)object {
    if (object != nil && ![object isEqual:[NSNull null]]) {
        [self addObject:object];
        return;
    }
    [object addObject:[NSNull null]];
}

- (id)removeFirstObject {
    id objcet = nil;
    if (self.count) {
        objcet = self.firstObject;
        [self removeObject:objcet];
    }
    return objcet;
}

@end
