---
layout: post
date: 2018-11-20 14:48:00
title:  "Đọc Sách Free - The Pragmaitc Programmer"
categories: noDev
tags:   noDev
author: Huy
---
* content
{:toc}

Cái hay trong lúc không có gì làm là tìm một thứ gì đó để làm, khi mà mới vào công ty trước đây, mình có khoảng 2 tuần rãnh rỗi nên lên thư viện đọc sách. Khi đó đọc cuốn "Đúng Việc", thật sự nó cuốn hút và làm mình muốn đọc thêm nữa, sau đó mình mượn những cuốn sách của những người trong công ty có để được đọc free :v. Cảm nhận được văn hóa đọc sách từ đó.






Từ khi đọc cuốn "Tuổi trẻ đáng giá bao nhiêu" và cảm nhận được ý nghĩa của tác giả truyền tải thì mình thấy rằng, dù là ai đi nữa, ngành nghề nào đi nữa thì cách để có được tri thức tốt và bền vững là đọc sách, và cũng là một thói quen tốt, vừa sống được phần đời của người khác, chứa nhiều tri thức và là cách thức nuôi dưỡng tâm hồn, tu dưỡng tinh thần hiệu quả :))

Bỏ qua phần lảm nhảm ở trên. Thì cách mình đọc cuốn sách về lập trình "The Pragmatic Programmer" cũng là free, mình thấy nhiều người khuyên đọc cuốn này nên tò mò, thế là ban đầu mình đọc review ở Blog Nhungdongcodevui, tiếp theo là mình xem review trên "Goodreads.com" để tìm những câu quote ấn tượng trong tác phẩm. Và mình cũng đọc những review của các blogger trên thế giới bằng tiếng Anh, so sánh nội dung với nhau. Mục đính của mình là hiểu được ý nghĩa của cuốn sách truyền tải. Cuốn cùng là mình ngồi viết lại những gì mình cảm thấy thú vị trong sách trên Blog này :p. Đương nhiên sách có bản pdf free và mình cũng đã đọc để viết nên bài viết này.

Sách gồm 8 chương nhưng mình đọc không theo thứ tự các chương, và bố cục bài viết này cũng vậy, theo đó câu chuyện về một Anh nông dân tên Tèo muốn trở thành lập trình viên hoàn hảo là câu chuyện có thể giúp mình theo dòng kể kể lại nội dung cuốn sách trong mới mẽ hơn:)
 

## Preface

Tèo là một người sống ở miền quê với khát khao thay đổi bản thân hiện tại và sống cuộc đời có ý nghĩa, đam mê với công nghệ nên quyết tâm học nghề lập trình viên.
Tèo đến nhà già làng xin cho lời khuyên vì biết già làng từng là một lập trình viên nỗi tiếng đã nghỉ hưu. 

Cuộc trò chuyện với già làng thật sự ý nghĩa với con đường trở thành lập trình viên ưu tú của Tèo với rất nhiều lời khuyên hữu ích.

Đầu tiên già làng nói để trở thành một lập trình viên là một công việc khó, nó cần sự học hỏi không ngừng, một khát khao lớn và một thái độ tốt. Tiếp theo là lời khuyên về những tố chất Tèo nên có:

- Thích nghi nhanh. Công nghệ thay đổi rất nhanh, việc yêu thích cái mới và tò mò tìm hiểu thử là đặc điểm chung của những người phù hợp với công việc lập trình.
- Luôn thắc mắc về mọi thứ. Không chỉ dừng ở việc tò mò đó là gì? mà cần phải biết cách để tạo ra điều đó, nó hoặc động ra sao và so sánh với những điều tương tự.
- "Think out of the box". Cố gắng tìm ra những khía cạnh khác của vấn đề và nghi ngờ mọi solution là chưa tốt nhất.
- Thực tế. Lập trình viên cần thành thật với chính bản thân và đồng nghiệp, đối mặt trực tiếp với vấn đề và thảo luận đến khi tìm được phương án phù hợp.
- Phù hợp với mọi môi trường. Dù là làm một mình hay một team nhiều người, làm trong công ty về chứng khoán, y tế, cổ phiếu hay công ty oursouce thì cần giữ một thói quen của một lập trình viên, bạn sẽ luôn có một nơi mới và thử thách mới cho bản thân.
- Luôn tìm cách để trở thành lập trình viên hoàn hảo là điều già làng khuyên Tèo cuối cùng.

Sau đó Già làng kể Câu chuyện về Người Nông Dân

- Một người du lịch đến hỏi người làm vườn "cách nào mà cỏ ở đây trông đẹp vậy".

- Người làm vườn trả lời: "Rất dễ", "Chỉ cần tưới chúng mỗi sáng", "Cắt tỉa mỗi buổi chiều", "và bón phân cho chúng mỗi tuần một lần"

- "Chỉ thế thôi à" người du lịch hỏi.
- "Đương nhiên" người làm vườn đáp "Làm điều đó 500 năm và Anh sẽ có được cỏ tốt như thế này"

Tèo hiểu ra rằng, dù nghề nào cũng vậy không chỉ làm lập trình viên, việc học hỏi kiến thức và làm việc mỗi ngày mới trở thành một lập trình viên có nhiều kinh nghiệm.


## A Pragmatic Philosophy

Ngày hôm sau, Tèo đến nhà già làng uống nước trà và hỏi "Những người lập trình viên giỏi thì họ như thế nào?"

Một câu hỏi về cách nhìn nhận thái độ làm việc chuyên nghiệp của lập trình viên mà với kinh nghiệm của già làng thừa biết ai là một lập trình viên tốt khi làm việc cùng. Với Tèo là một sự thay đổi lớn sau khi nghe già làng chia sẽ.

Già làng đưa ra luận điểm đầu tiên Tèo cần có là "Trách nhiệm với công việc", khi gặp lỗi không tìm các lý do để đỗ lỗi mà tìm phương pháp để khắc phục và backup, không nói "the cat ate my source code", đừng đỗ lỗi cho người khác, thay vì phàn nàn thì hãy cố gắng nghĩ ra solution, tìm ra cách trước khi bàn về vấn đề.

Họ là "Động lực cho sản phẩm", what makes the difference?, với triết lý mong muốn sản phẩm của họ thật tốt nên họ liên tục tìm ra những vấn đề và xem việc viết code đẹp và sạch như một cách thể hiện bản thân.

Đương nhiên họ sẽ có những sai lầm (thiết kế tệ, quyết định sai, code xấu) nhưng khao khát để có được sản phẩm tốt hơn sẽ không bị dập tắt "don't live with broken windows"

Già làng kể cho Tèo nghe câu chuyện về "Món soup đá" và "Nấu con ếch"

Có Anh người lính rất đói, họ đến một ngồi làng và mong muốn có một bữa ăn trong khi dân làng ở đây có rất ít thức ăn do trải qua nhiều năm chiến tranh.

Thế là Anh ta nghĩ ra cách nấu 3 hòn đá lớn vào một nồi nước lớn, dân làng ngạc nhiên đến xem, Anh giải thích "Đây là hòn đá soup, chỉ cần một ít ca rốt là sẽ có một món soup tuyệt vời. 

Thế là một người dân đem đến một ít ca rốt, sau khi nếm, người lính nói cần một ít khoai tây, và một dân làng khác đã đem đến. Vài giờ sau, thì Anh ta muốn thêm thịt, hành, đường, muối và ngò và người dân đã cung cấp cho Anh ta.

Thậm chí dân làng mong chờ được thưởng thất món soup tuyệt vời này. A ta vớt đá ra và cùng dân làng thưởng thức món soup mà người dân ở đây đã từng ăn nhiều lần.

Những viên đá và Người lính là tác nhân để tạo ra một sản phẩm tuyệt vời, việc lập trình ra sản phẩm cũng giống như nấu soup và những dân làng là những lập trình viên với khát khao được dùng sản phẩm.

Câu chuyện về "Nấu con ếch"

Khi bỏ một con ếch và nước đang nấu thì nó sẽ nhảy trở ra, tuy nhiên nếu bỏ nó vào nồi nước lạnh, sau đó đun nóng, với sự thay đổi nhiệt độ chậm nên ếch sẽ bị nấu chính sau đó.

Con ếch là một lập trình không có tầm nhìn và chỉ phản ứng khi mọi thứ quá muộn.


## A Pragmatic Approach

## Pragmatic Project

## While You Are Coding

## Before the Project

## Pragmatic paranoia

## The Basic Tool

## Bend or Break

