"""BlogProject URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
'''
from django.contrib import admin
from django.urls import path

from blog.views import * #blog 앱의 views의 모든 메소드들을 호출

urlpatterns = [
    path('admin/', admin.site.urls),
    path('',mainPage,name='mainPage'), #['링크',불러올 함수명,path 이름]
    path('<str:id>',detail,name='detail'), #detail함수로 매개변수 id가 전달된다.
    path('new/',new,name='new'),
    path('create/',create,name="create"),
    path('edit/<str:id>',edit,name="edit"),
    path('update/<str:id>',update,name="update"),
    path('delete/<str:id>',delete,name="delete")
]
'''
#In BlogProject.urls.py
from django.contrib import admin
from django.urls import path,include #include 추가

from blog.views import mainPage #mainPage만 불러오면 된다.
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),
    path('',mainPage,name='mainPage'), #메인페이지는 여기서 관리하기 때문 
 	path('blog/',include('blog.urls')), #blog.urls.py내부의 path들을 이 한줄로 포함시킬수있다.
    path('account/',include('account.urls')), #account.urls.py내부의 path들을 한줄로 포함
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
