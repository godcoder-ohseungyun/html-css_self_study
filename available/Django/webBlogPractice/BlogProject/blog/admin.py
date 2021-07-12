from django.contrib import admin
from .models import Blog
# Register your models here.

#admin page에 대한 관리
#admin page에 models에 생성한 클래스(data테이블)을 등록


admin.site.register(Blog) #테이블 등록 in admin site

