//
//  UIImage+SSAdd.m
//  12313213
//
//  Created by jiuhao-yangshuo on 16/5/24.
//  Copyright © 2016年 jiuhao. All rights reserved.
//

#import "UIImage+SSAdd.h"
#import "UIColor+SSAdd.h"

@implementation UIImage (SSAdd)

- (UIImage *) imageWithTintColor:(UIColor *)tintColor
{
    return [self imageWithTintColor:tintColor blendMode:kCGBlendModeDestinationIn];
}

- (UIImage *) imageWithGradientTintColor:(UIColor *)tintColor
{
    return [self imageWithTintColor:tintColor blendMode:kCGBlendModeOverlay];
}

- (UIImage *) imageWithTintColor:(UIColor *)tintColor blendMode:(CGBlendMode)blendMode
{
    //We want to keep alpha, set opaque to NO; Use 0.0f for scale to use the scale factor of the device’s main screen.
    UIGraphicsBeginImageContextWithOptions(self.size, NO, 0.0f);
    [tintColor setFill];
    CGRect bounds = CGRectMake(0, 0, self.size.width, self.size.height);
    UIRectFill(bounds);
    
    //Draw the tinted image in context
    [self drawInRect:bounds blendMode:blendMode alpha:1.0f];
    
    if (blendMode != kCGBlendModeDestinationIn) {
        [self drawInRect:bounds blendMode:kCGBlendModeDestinationIn alpha:1.0f];
    }
    
    UIImage *tintedImage = UIGraphicsGetImageFromCurrentImageContext();
    UIGraphicsEndImageContext();
    
    return tintedImage;
}


//截取部分图像
-(UIImage*)getSubImage:(CGRect)rect
{
    CGImageRef subImageRef = CGImageCreateWithImageInRect(self.CGImage, rect);
    CGRect smallBounds = CGRectMake(0, 0, CGImageGetWidth(subImageRef), CGImageGetHeight(subImageRef));
    
    UIGraphicsBeginImageContext(smallBounds.size);
    CGContextRef context = UIGraphicsGetCurrentContext();
    CGContextDrawImage(context, smallBounds, subImageRef);
    UIImage* smallImage = [UIImage imageWithCGImage:subImageRef];
    UIGraphicsEndImageContext();
    
    return smallImage;
}

//等比例缩放
-(UIImage*)scaleToSize:(CGSize)size
{
    CGFloat width = CGImageGetWidth(self.CGImage);
    CGFloat height = CGImageGetHeight(self.CGImage);
    
    float verticalRadio = size.height*1.0/height;
    float horizontalRadio = size.width*1.0/width;
    
    float radio = 1;
    if(verticalRadio>1 && horizontalRadio>1)
    {
        radio = verticalRadio > horizontalRadio ? horizontalRadio : verticalRadio;
    }
    else
    {
        radio = verticalRadio < horizontalRadio ? verticalRadio : horizontalRadio;
    }
    
    width = width*radio;
    height = height*radio;
    
    int xPos = (size.width - width)/2;
    int yPos = (size.height-height)/2;
    
    // 创建一个bitmap的context
    // 并把它设置成为当前正在使用的context
    UIGraphicsBeginImageContext(size);
    
    // 绘制改变大小的图片
    [self drawInRect:CGRectMake(xPos, yPos, width, height)];
    
    // 从当前context中创建一个改变大小后的图片
    UIImage* scaledImage = UIGraphicsGetImageFromCurrentImageContext();
    
    // 使当前的context出堆栈
    UIGraphicsEndImageContext();
    
    // 返回新的改变大小后的图片
    return scaledImage;
}

+ (UIImage*)createImageWithFillColor:(UIColor*)fillColor andWithStrokeColor:(UIColor*)strokeColor withWeigt:(float)weight andWithHeight:(float)height andWithStrokeWeight:(float)strokeWeight
{
    CGRect rect = CGRectMake(0.0f, 0.0f, weight, height);
    UIGraphicsBeginImageContextWithOptions(rect.size, NO, [UIScreen mainScreen].scale);
    CGContextRef context = UIGraphicsGetCurrentContext();
    if (fillColor)
    {
        CGContextSetFillColorWithColor(context, [fillColor CGColor]);
    }
    if (strokeColor)
    {
        CGContextSetStrokeColorWithColor(context, [strokeColor CGColor]);
    }
    
    CGContextSetLineWidth(context, strokeWeight);
    CGContextMoveToPoint(context, 0,height);
    CGContextAddLineToPoint(context, rect.size.width,height);
    CGContextAddLineToPoint(context, rect.size.width/2.0,0);
    CGContextClosePath(context);
    if (fillColor)
    {
        CGContextFillPath(context);
    }
    if (strokeColor)
    {
        CGContextStrokePath(context);
        //        CGContextDrawPath(context, kCGPathFillStroke);
    }
    UIImage* theImage = UIGraphicsGetImageFromCurrentImageContext();
    UIGraphicsEndImageContext();
    return theImage;
}


/**
 *  压缩到指定大小图片
 *
 *  @param imageSize 100k
 *
 *  @return Data
 */
- (NSData *)compressImageToSpecifyM:(NSUInteger )imageSize {
    // Determine output size
    CGFloat maxSize = 1024.0f;
    CGFloat width = self.size.width;
    CGFloat height = self.size.height;
    CGFloat newWidth = width;
    CGFloat newHeight = height;
    
    // If any side exceeds the maximun size, reduce the greater side to 1200px and proportionately the other one
    if (width > maxSize || height > maxSize) {
        if (width > height) {
            newWidth = maxSize;
            newHeight = (height*maxSize)/width;
        } else {
            newHeight = maxSize;
            newWidth = (width*maxSize)/height;
        }
    }
    // Resize the image
    CGSize newSize = CGSizeMake(newWidth, newHeight);
    UIGraphicsBeginImageContext(newSize);
    [self drawInRect:CGRectMake(0,0,newSize.width,newSize.height)];
    UIImage *newImagePic = UIGraphicsGetImageFromCurrentImageContext();
    UIGraphicsEndImageContext();
    
    CGFloat compression = 0.9f;
    CGFloat maxCompression = 0.1f;
    if (imageSize == 0) {
        imageSize = 100;
    }
    NSUInteger maxFileSize = imageSize*1024;
    NSData *newImageData = UIImageJPEGRepresentation(newImagePic, compression);
    while ([newImageData length] > maxFileSize && compression > maxCompression) {
        compression -= 0.1;
        newImageData = UIImageJPEGRepresentation(newImagePic, compression);
    }
    return newImageData;
}

- (NSData *)dataByCompressToSize:(CGSize)size toQuality:(CGFloat)quality {
    UIImage *compressedImage = self;
    if (!CGSizeEqualToSize(size, CGSizeZero)) {
        UIGraphicsBeginImageContext(size);
        [self drawInRect:CGRectMake(0, 0, size.width, size.height)];
        compressedImage = UIGraphicsGetImageFromCurrentImageContext();
        UIGraphicsEndImageContext();
    }
    if (quality == 1) {
        return UIImagePNGRepresentation(compressedImage);
    } else {
        return UIImageJPEGRepresentation(compressedImage, quality);
    }
}

//把UIColor对象转化成UIImage对象
+ (UIImage*)createImageWithColor:(UIColor*)color {
    CGRect rect = CGRectMake(0.0f, 0.0f, 1.0f, 1.0f);
    UIGraphicsBeginImageContext(rect.size);
    CGContextRef context = UIGraphicsGetCurrentContext();
    CGContextSetFillColorWithColor(context, [color CGColor]);
    CGContextFillRect(context, rect);
    UIImage* theImage = UIGraphicsGetImageFromCurrentImageContext();
    UIGraphicsEndImageContext();
    
    return theImage;
}

+ (UIImage *)fetchAppiconImage {
    UIImage *image = [UIImage imageNamed: [UIImage fetchAppiconImageString]];
    return image;
}

+(NSString *)fetchAppiconImageString {
    NSString *imageString = [[[[[[NSBundle mainBundle] infoDictionary] objectForKey:@"CFBundleIcons"] objectForKey:@"CFBundlePrimaryIcon"] objectForKey:@"CFBundleIconFiles"] lastObject];
    return imageString;
}

@end
