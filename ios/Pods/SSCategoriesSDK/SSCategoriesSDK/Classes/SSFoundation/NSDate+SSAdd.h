//
//  NSDate+SSAdd.h
//  12313213
//
//  Created by jiuhao-yangshuo on 16/5/24.
//  Copyright © 2016年 jiuhao. All rights reserved.
//

#import <Foundation/Foundation.h>

@interface NSDate (SSAdd)

+(NSDate *)dateStartOfDay:(NSDate *)date;
+(NSDate *)dateStartOfWeek;
+(NSDate *)dateEndOfWeek;

-(NSDate *)offsetMonth:(int)numMonths;
-(NSDate *)offsetDay:(int)numDays;
-(NSDate *)offsetHours:(int)hours;
-(int)numDaysInMonth;
-(int)firstWeekDayInMonth;
-(int)year;
-(int)month;
-(int)day;

@end


@interface NSDate (PGAdd)
//时间格式
+ (long long)fetchLongTime;
//零点时间
+ (long long)fetchLongZeroTime;
//long 时间
+ (long long)fetchLonglongTime;

//服务器时间转换
+ (NSString*)fetchServerTime:(long long)timeLine type:(int)type;
+ (NSString*)fetchServerTimeForStr:(NSString*)dateString type:(int)type;
//字符串格式
+ (NSString*)formatCreatetTime:(NSDate*)time;
+ (NSString*)formatCreatetTimeHaveHHMMSS:(NSDate*)time;

@end

