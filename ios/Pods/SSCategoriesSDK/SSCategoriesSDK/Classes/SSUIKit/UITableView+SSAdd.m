//
//  UITableView+SSAdd.m
//  Pods
//
//  Created by yangshuo on 16/12/1.
//
//

#import "UITableView+SSAdd.h"

@implementation UITableView (SSAdd)


- (void)setUpExtraCellLineHidden {
    UIView* view = [UIView new];
    view.backgroundColor = [UIColor clearColor];
    [self setTableFooterView:view];
}

- (void)setUpLastCellLineHidden {
    self.tableFooterView = [[UIView alloc] initWithFrame:CGRectMake(0, 0, self.frame.size.width, 1)];
}

@end
