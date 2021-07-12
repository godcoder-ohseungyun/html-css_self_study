from django.db import models

# Create your models here.

#데이터베이스를 객체화 하여 표현하기위해 테이블 생성
#클래스(data테이블)을 등록

#블로그(게시물) 테이블
class Blog(models.Model):
    #칼럼정의
    title = models.CharField(max_length=200)
    writer = models.CharField(max_length=100)
    pub_date = models.DateTimeField()
    body = models.TextField()
    images = models.ImageField(upload_to="blog/" ,blank=True, null=True )

    def __str__(self): 
        return self.title 
    
    def summary(self):
        return self.body[:100] 


        