//
//  NSDate+SSAdd.m
//  12313213
//
//  Created by jiuhao-yangshuo on 16/5/24.
//  Copyright © 2016年 jiuhao. All rights reserved.
//

#import "NSDate+SSAdd.h"
#define startWeekday 1

@implementation NSDate (SSAdd)
-(int)year {
    NSCalendar *gregorian = [[NSCalendar alloc] initWithCalendarIdentifier:NSGregorianCalendar] ;
    NSDateComponents *components = [gregorian components:NSYearCalendarUnit fromDate:self];
    return (int)[components year];
}


-(int)month {
    NSCalendar *gregorian = [[NSCalendar alloc] initWithCalendarIdentifier:NSGregorianCalendar] ;
    NSDateComponents *components = [gregorian components:NSMonthCalendarUnit fromDate:self];
    return (int)[components month];
}

-(int)day {
    NSCalendar *gregorian = [[NSCalendar alloc] initWithCalendarIdentifier:NSGregorianCalendar];
    NSDateComponents *components = [gregorian components:NSDayCalendarUnit fromDate:self];
    return (int)[components day];
}

-(int)firstWeekDayInMonth {
    NSCalendar *gregorian = [[NSCalendar alloc] initWithCalendarIdentifier:NSGregorianCalendar];
    [gregorian setFirstWeekday:startWeekday]; //monday is first day
    //[gregorian setLocale:[[NSLocale alloc] initWithLocaleIdentifier:@"nl_NL"]];
    
    //Set date to first of month
    NSDateComponents *comps = [gregorian components:NSYearCalendarUnit | NSMonthCalendarUnit |  NSDayCalendarUnit fromDate:self];
    [comps setDay:1];
    NSDate *newDate = [gregorian dateFromComponents:comps];
    
    return (int)[gregorian ordinalityOfUnit:NSWeekdayCalendarUnit inUnit:NSWeekCalendarUnit forDate:newDate];
}

-(NSDate *)offsetMonth:(int)numMonths {
    NSCalendar *gregorian = [[NSCalendar alloc] initWithCalendarIdentifier:NSGregorianCalendar];
    [gregorian setFirstWeekday:startWeekday]; //monday is first day
    
    NSDateComponents *offsetComponents = [[NSDateComponents alloc] init];
    [offsetComponents setMonth:numMonths];
    //[offsetComponents setHour:1];
    //[offsetComponents setMinute:30];
    return [gregorian dateByAddingComponents:offsetComponents
                                      toDate:self options:0];
}

-(NSDate *)offsetHours:(int)hours {
    NSCalendar *gregorian = [[NSCalendar alloc] initWithCalendarIdentifier:NSGregorianCalendar];
    [gregorian setFirstWeekday:startWeekday]; //monday is first day
    
    NSDateComponents *offsetComponents = [[NSDateComponents alloc] init];
    //[offsetComponents setMonth:numMonths];
    [offsetComponents setHour:hours];
    //[offsetComponents setMinute:30];
    return [gregorian dateByAddingComponents:offsetComponents
                                      toDate:self options:0];
}

-(NSDate *)offsetDay:(int)numDays {
    NSCalendar *gregorian = [[NSCalendar alloc] initWithCalendarIdentifier:NSGregorianCalendar];
    [gregorian setFirstWeekday:startWeekday]; //monday is first day
    
    NSDateComponents *offsetComponents = [[NSDateComponents alloc] init];
    [offsetComponents setDay:numDays];
    //[offsetComponents setHour:1];
    //[offsetComponents setMinute:30];
    
    return [gregorian dateByAddingComponents:offsetComponents
                                      toDate:self options:0];
}

-(int)numDaysInMonth {
    NSCalendar *cal = [NSCalendar currentCalendar];
    NSRange rng = [cal rangeOfUnit:NSDayCalendarUnit inUnit:NSMonthCalendarUnit forDate:self];
    NSUInteger numberOfDaysInMonth = rng.length;
    return (int)numberOfDaysInMonth;
}

+(NSDate *)dateStartOfDay:(NSDate *)date {
    NSCalendar *gregorian = [[NSCalendar alloc] initWithCalendarIdentifier:NSGregorianCalendar];
    
    NSDateComponents *components =
    [gregorian components:(NSYearCalendarUnit | NSMonthCalendarUnit |
                           NSDayCalendarUnit) fromDate: date];
    return [gregorian dateFromComponents:components];
}

+(NSDate *)dateStartOfWeek {
    NSCalendar *gregorian = [[NSCalendar alloc] initWithCalendarIdentifier:NSGregorianCalendar];
    [gregorian setFirstWeekday:startWeekday]; //monday is first day
    
    NSDateComponents *components = [[NSCalendar currentCalendar] components:NSWeekdayCalendarUnit fromDate:[NSDate date]];
    
    NSDateComponents *componentsToSubtract = [[NSDateComponents alloc] init];
    [componentsToSubtract setDay: - ((([components weekday] - [gregorian firstWeekday])
                                      + 7 ) % 7)];
    NSDate *beginningOfWeek = [gregorian dateByAddingComponents:componentsToSubtract toDate:[NSDate date] options:0];
    
    NSDateComponents *componentsStripped = [gregorian components: (NSYearCalendarUnit | NSMonthCalendarUnit | NSDayCalendarUnit)
                                                        fromDate: beginningOfWeek];
    
    //gestript
    beginningOfWeek = [gregorian dateFromComponents: componentsStripped];
    
    return beginningOfWeek;
}

+(NSDate *)dateEndOfWeek {
    NSCalendar *gregorian =[[NSCalendar alloc] initWithCalendarIdentifier:NSGregorianCalendar];
    
    NSDateComponents *components = [[NSCalendar currentCalendar] components:NSWeekdayCalendarUnit fromDate:[NSDate date]];
    
    
    NSDateComponents *componentsToAdd = [[NSDateComponents alloc] init];
    [componentsToAdd setDay: + (((([components weekday] - [gregorian firstWeekday])
                                  + 7 ) % 7))+6];
    NSDate *endOfWeek = [gregorian dateByAddingComponents:componentsToAdd toDate:[NSDate date] options:0];
    
    NSDateComponents *componentsStripped = [gregorian components: (NSYearCalendarUnit | NSMonthCalendarUnit | NSDayCalendarUnit)
                                                        fromDate: endOfWeek];
    
    //gestript
    endOfWeek = [gregorian dateFromComponents: componentsStripped];
    return endOfWeek;
}

@end


@implementation NSDate (PGAdd)

+(NSString*)formatCreatetTime:(NSDate*)time {
    if ((NSNull*)time == [NSNull null]) {
        return @"";
    }
    NSDateFormatter *formatter = [[NSDateFormatter alloc] init];
    [formatter setDateFormat:@"yyyy-MM-dd"];
    NSString *dateString = [formatter stringFromDate:time];
    return dateString;
}

+ (NSString*)formatCreatetTimeHaveHHMMSS:(NSDate*)time {
    if ((NSNull*)time == [NSNull null]) {
        return @"";
    }
    NSDateFormatter *formatter = [[NSDateFormatter alloc] init];
    [formatter setDateFormat:@"yyyy-MM-dd HH:mm:ss"];
    NSString *dateString = [formatter stringFromDate:time];
    return dateString;
}

//获得当前时间
+ (long long)fetchLongTime {
    NSDate* now = [NSDate date];
    //    NSLog(@"%@",now);
    long long test = (long long)[now timeIntervalSince1970];
    return test;
}

//获得当前时间
+ (long long)fetchLongZeroTime {
    NSDate* now = [NSDate date];
    NSDateFormatter *formatter = [[NSDateFormatter alloc] init];
    [formatter setDateFormat:@"yyyy-MM-dd"];
    NSString *dateString = [formatter stringFromDate:now];
    NSDate *zeroDate = [formatter dateFromString:dateString];
    long long test = (long long)[zeroDate timeIntervalSince1970];
    return test;
}

//获得当前时间
+ (long long)fetchLonglongTime {
    NSDate* now = [NSDate date];
    long long test = (long long)([now timeIntervalSince1970]*1000);
    return test;
}

//服务器返回时间戳进行转换
+ (NSString*)fetchServerTime:(long long)timeLine type:(int)type {
    NSString *timeStr = [NSString stringWithFormat:@"%lld", timeLine];
    NSString* currentDateStr = [self fetchServerTimeForStr:timeStr type:type];
    return currentDateStr;
}

+ (NSString*)fetchServerTimeForStr:(NSString*)dateString type:(int)type {
    if (dateString.length > 10) {
        dateString = [dateString substringToIndex:10];
    }
    NSDateFormatter* dateFormatter = [[NSDateFormatter alloc] init];
    //    [dateFormatter setDateFormat:@"yyyy-MM-dd HH:mm:ss +0000"];
    NSTimeInterval time = dateString.longLongValue;
    NSDate* detaildate = [NSDate dateWithTimeIntervalSince1970:time];;
    NSString* currentDateStr = nil;
    switch (type) {
        case 1:
            [dateFormatter setDateFormat:@"HH:mm"];
            currentDateStr = [dateFormatter stringFromDate:detaildate];
            break;
        case 2:
            [dateFormatter setDateFormat:@"MM月dd号"];
            currentDateStr = [dateFormatter stringFromDate:detaildate];
            break;
        case 3:
            [dateFormatter setDateFormat:@"MM-dd HH:mm"];
            currentDateStr = [dateFormatter stringFromDate:detaildate];
            break;
        case 4:
            [dateFormatter setDateFormat:@"yyyy-MM-dd"];
            currentDateStr = [dateFormatter stringFromDate:detaildate];
            break;
        case 5:
            [dateFormatter setAMSymbol:@"上午"];
            [dateFormatter setPMSymbol:@"下午"];
            [dateFormatter setDateFormat:@"MM月dd日,EEE aHH:mm"];
            currentDateStr = [dateFormatter stringFromDate:detaildate];
            break;
        case 6:
            [dateFormatter setDateFormat:@"yyyy年MM月"];
            currentDateStr = [dateFormatter stringFromDate:detaildate];
            break;
        case 7:
            [dateFormatter setDateFormat:@"dd"];
            currentDateStr = [dateFormatter stringFromDate:detaildate];
            break;
        case 8:
            [dateFormatter setDateFormat:@"yyyy.MM.dd"];
            currentDateStr = [dateFormatter stringFromDate:detaildate];
            break;
        case 9:
            [dateFormatter setDateFormat:@"yyyy.MM.dd HH:mm"];
            currentDateStr = [dateFormatter stringFromDate:detaildate];
            break;
        case 10:
            [dateFormatter setDateFormat:@"yyyy年MM月dd日 HH:mm"];
            currentDateStr = [dateFormatter stringFromDate:detaildate];
            break;
        case 11:
            [dateFormatter setDateFormat:@"yyyy-MM-dd HH:mm"];
            currentDateStr = [dateFormatter stringFromDate:detaildate];
            break;
        case 12:
            [dateFormatter setDateFormat:@"yyyy/MM/dd HH:mm"];
            currentDateStr = [dateFormatter stringFromDate:detaildate];
            break;
        case 13:
            [dateFormatter setDateFormat:@"MM-dd"];
            currentDateStr = [dateFormatter stringFromDate:detaildate];
            break;
        case 14:
            [dateFormatter setDateFormat:@"yyyy年MM月dd日"];
            currentDateStr = [dateFormatter stringFromDate:detaildate];
            break;
        default:
            [dateFormatter setDateFormat:@"yyyy-MM-dd HH:mm:ss"];
            currentDateStr = [dateFormatter stringFromDate:detaildate];
            break;
    }
    return currentDateStr;
}
@end
