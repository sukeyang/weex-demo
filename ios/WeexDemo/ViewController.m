//
//  ViewController.m
//  TextDemo
//
//  Created by yangshuo on 16/11/11.
//  Copyright © 2016年 JLRC. All rights reserved.
//

#import "ViewController.h"
#import <WeexSDK/WeexSDK.h>
#import <EventKit/EventKit.h>
#import <SSCategories.h>

@interface ViewController ()<UIGestureRecognizerDelegate>
@property (nonatomic, readwrite, strong) WXSDKInstance *instance;
@property (nonatomic, copy) NSString *url;
@property (nonatomic, weak) UIView *weexView;
@end

@implementation ViewController
{
    NSArray *gesArry;
    NSInteger tapCount;
}

- (void)viewDidLoad {
    [super viewDidLoad];
    NSLog(@"");
    
    //在self.view上添加一个原生的按钮
//    UIButton *testButton = [[UIButton alloc] initWithFrame:CGRectMake(0, 64, 200, 100)];
//    [self.view addSubview:testButton];
//    [testButton setTitle:@"原生的button" forState:UIControlStateNormal];
//    [testButton setTitleColor:[UIColor redColor] forState:UIControlStateNormal];
    [self render];
}

- (void)render{
//    NSURL *URL = [[NSURL alloc] initFileURLWithPath:self.url];
    
    CGFloat width = self.view.frame.size.width;
    [_instance destroyInstance];
    _instance = [[WXSDKInstance alloc] init];
    _instance.viewController = self;
    CGFloat offY = 64;
    _instance.frame = CGRectMake(self.view.frame.size.width-width, offY, width, self.view.frame.size.height - offY);
    
    __weak typeof(self) weakSelf = self;
    _instance.onCreate = ^(UIView *view) {
        [weakSelf.weexView removeFromSuperview];
        weakSelf.weexView = view;
        [weakSelf.view addSubview:weakSelf.weexView];
         NSLog(@"----onCreate-%@",view);
    };
    
    _instance.onFailed = ^(NSError *error) {
        //process failure
        NSLog(@"----onFailed-%@",error);
    };
    _instance.renderFinish = ^ (UIView *view) {
        //process renderFinish
         NSLog(@"----renderFinish-%@",view);
    };
    
    _instance.updateFinish = ^(UIView *view) {
        NSLog(@"update Finish");
    };
//     NSString *url = [[NSBundle mainBundle] pathForResource:@"hello" ofType:@"js"];
    NSString *url = [NSString stringWithFormat:@"file://%@/index.js",[NSBundle mainBundle].bundlePath];
    
    [_instance renderWithURL:[NSURL URLWithString:url] options:@{@"bundleUrl":url} data:nil];
}

- (void)dealloc{
    [_instance destroyInstance];
}


@end
