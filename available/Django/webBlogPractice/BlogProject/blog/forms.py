#In App.forms.py
from django import forms
from .models import Blog #테이블 가져옴

#폼관리할 테이블의 클래스
class BlogForm(forms.ModelForm):
    #메타클래스 작성
    class Meta:
        model = Blog #테이블
        fields = ['title','writer','body','images'] #폼관리할 필드정보    