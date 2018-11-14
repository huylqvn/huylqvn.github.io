---
layout: post
date: 2018-11-14 17:48:00
title:  "Muốn học JavaScript cần học những gì?"
categories: Programming
tags:   Javascript, Concept
author: Huy
---
* content
{:toc}

## Giới Thiệu
- Thế giới của javascript có rất nhiều thứ để học và để cover được tất cả thì cần một effort không hề nhỏ, hy vọng bài viết này sẽ giúp gôm cụm được những kiến thức cần tìm hiểu về javascript.
- Tương lai của js tương đối tươi sáng cùng với cộng đồng opensource đông đảo, từ client server, tool đến các database cũng có nhiều dự án đang triển khai bằng js.
- Nếu như đã biết một ngôn ngữ lập trình nào đó thì học js rất nhanh

## 1. Values, Types và Operators
- Là những thành phần cơ bản cấu thành nên bất cứ chương trình nào.
- Javascript sử dụng 64 bit để biểu diễn number
- Cần chú ý memory leak khi sử dụng biến [Link blog memory leak](https://auth0.com/blog/four-types-of-leaks-in-your-javascript-code-and-how-to-get-rid-of-them/)

## Statement
- Được kết thúc bằng dấu chấm phẩu ";" hoặc có thể bỏ nhưng các câu lệnh phải khác dòng
- Đặt tên biến theo chuẩn, dùng CamelCase hay under_score
- control flow bao gồm if else if else, switch case default, while, do while, for, forEach
- Nên rèn luyện statement từ [W3School](https://www.w3schools.com/js/default.asp)

## Các loại function
- Javascript là ngôn ngữ functional programming nên đây là nguyên lý để viết code JS
- Tham số và phạm vi (scope), nếu tham số là kiểu dữ liệu cơ bản thì sẽ không thay đổi giá trị khi truyền hàm (tham trị), function cũng tham trị nhưng đối với object thì sẽ truyền tham biến, tức sẽ thay đổi giá trị khi thoát khỏi hàm.
- Nested scope là những hàm được khai báo trong hàm thì chỉ được sử dụng trong hàm đó
- Closure function, tức sẽ không cần quan tâm các biến cục bộ ảnh hưởng đến kết quả.
- Recursion là một các viết thay thế vòng lặp theo ngôn ngữ toán học dễ dàng hơn.
- Khi viết function cần ưu tiên thỏa mãn hàm chỉ thực hiện 1 chức năng duy nhất, độc lập với các biến bên ngoài và dễ tái sử dụng.
- Tham khảo thêm bài viết về cách sử dụng function trong javascript [Function trong javascript](https://codeburst.io/all-about-javascript-functions-in-1-article-49bfd94b31ab)

## 


