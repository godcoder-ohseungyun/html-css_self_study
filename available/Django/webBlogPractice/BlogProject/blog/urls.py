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

from .views import * #blog 앱의 views의 모든 메소드들을 호출

urlpatterns = [
    path('<str:id>',detail,name='detail'), #detail함수로 매개변수 id가 전달된다.
    path('new/',new,name='new'),
    path('create/',create,name="create"),
    path('edit/<str:id>',edit,name="edit"),
    path('update/<str:id>',update,name="update"),
    path('delete/<str:id>',delete,name="delete")
]
'''
# In blog.urls.py
from django.contrib import admin
from django.urls import path

from .views import * #blog.views -> .views 앱폴더로 들어왔기때문에 현재경로.views로 변경

urlpatterns = [
    #path('admin/', admin.site.urls), #삭제: 어디민도 프로젝트에서 관리
    #path('',mainPage,name='mainPage'), #삭제: 메인페이지는 프로젝트에서 관리
    #앱 관련 path만 남겨둔다
    path('<str:id>',detail,name='detail'), 
    path('new/',new,name='new'),
    path('create/',create,name="create"),
    path('edit/<str:id>',edit,name="edit"),
    path('update/<str:id>',update,name="update"),
    path('delete/<str:id>',delete,name="delete")
]
