from django.shortcuts import render,redirect
from django.contrib.auth.forms import AuthenticationForm
from django.contrib.auth import authenticate,login,logout

from .forms import RegisterForm

# Create your views here.
def login_view(request): #view라고 이름 짖는 이유는 auth의 login 메소드와 충돌을 방지하기 위해서이다.
    
    if request.method == "POST": #로그인 시(데이터 송시) data 저장
        form = AuthenticationForm(request=request,data=request.POST)
        if form.is_valid():
            username= form.cleaned_data.get("username")
            password = form.cleaned_data.get("password")
            user = authenticate(request=request,username=username,password=password)
            if user is not None: #유저가 저장되었으면
                login(request,user) #로그인 후
        return redirect("mainPage")# 홈으로 이동
    else:
        form = AuthenticationForm() #로그인 폼 제공
        return render(request,'login.html',{'form':form})
    

def logout_view(request): #로그아웃
    logout(request)
    return redirect("mainPage")


def register_view(request): #회원가입
    if request.method == "POST":
        form = RegisterForm(request.POST)
        if form.is_valid():
            user = form.save()
            login(request,user)
        return redirect("mainPage")

    else:
        form = RegisterForm() 
        return render(request,'signup.html',{'form':form})