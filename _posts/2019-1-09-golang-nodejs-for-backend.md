---
layout: post
date: 2020-01-06 13:06:00
title:  "Làm backend với golang và nodeJS"
categories: fresher
tags:   fresher
author: Huy
---
* content
{:toc}

- Bắt đầu một năm mới với nhiều điều mới mẻ với mình. Mình vừa xin công ty nghỉ việc trong khi chưa tìm cho mình cơ hội công việc mới nào. Thật ra cảm thấy thoải mái hơn nhiều khi ra quyết định này, để bản thân relax một thời gian trước tết và sau tết, hì. 

- Cũng hơn 1 tuần rồi mình chỉ ngồi quán cafe và ngồi làm những việc linh tinh, try những thứ khá simple nhưng cũng hấp dẫn với người dành thời gian refactor code nhìu trong năm nay. :) :) 

Dưới đây là 2 stucture backend viết bằng golang và nodejs mà mình dành thời gian để  xây dựng lên. để so sánh sự đơn giản và dễ maintain của 2 language backend phổ biến.

Ở Golang Project mình dùng go-kit để init xây dựng lên, kết hợp cả GRPC và HTTP. mình cảm thấy thích kiểu stucture của go-kit, nó có tính simple và tái sử dụng cao. khi đã quen với cấu trúc này thì rất dễ maintain và phát triển dự án, Việc viết unitest cũng không là vấn đề, nhưng mình chưa apply unitest vào.

Project thiết kế theo Domain Driven, code generation với protobuf

![Golang project here](https://github.com/huylqbk/http-grpc-go-kit-demo)


Còn ở NodeJS Project thiết kế theo hướng functional, apply OOP không quá phức tạp, nhưng nếu dự án phình to thì nhìn rối.
async await function. Mình không phải là fan của nodejs nên nhìn chung để làm một dự án nhỏ, cần nhanh để lên production thì có thể dùng thiết kế này để xây dựng cho backend. theo mình thì cũng là đẹp so với những dự án làm bằng nodejs mà mình từng làm :smile .

![NodeJS project here](https://github.com/huylqbk/NodeJSBackend)

Mong có sự góp ý từ những ai đọc qua, có nhu cầu tuyển dụng mình thì liên hệ qua mail: lequochuy930@gmail.com hoặc [linkedin](https://www.linkedin.com/in/huylqbk/) Mình đang avaiable và looking for a new challenge trong thời gian này. :)))) .


 