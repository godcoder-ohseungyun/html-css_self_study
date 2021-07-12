from django.shortcuts import render,redirect,get_object_or_404
from django.utils import timezone
from .models import Blog #테이블을 불러옴
from .forms import BlogForm  #선언
from django.core.paginator import Paginator
#사용자의 요청을 보이지 않게 처리 
#view.

1
#mainPage에 BlogTable의 정보를 전달하는 함수

#Read=========================================
#메인 홈페이지 연결 메소드
def mainPage(request):
    blogTables = Blog.objects.all() #객체들을 모두 리스트 담음
    paginator = Paginator(blogTables,3)
    page=request.GET.get('page')
    return render(request,"mainPage.html",{'blogTables':blogTables})

#메인 홈페이지에서 게시물 클릭시 이동하는 상세 페이지 연결 메소드
def detail(request,id):
    blogTable = get_object_or_404(Blog,pk=id) #pk 일치하는 객체 호출 or  404(존재하지 않는 호출의 경우)
    return render(request,'detail.html',{'blogTable':blogTable})


#Create=========================================
#새 게시물을 작성하는 페이지 연결 메소드
def new(request): 
    form = BlogForm() #폼 객체 호출
    return render(request,'new.html',{'form':form}) #매개변수로 보내주기 to new.html


#new.html로 부터 제출된 정보를 받아 새로운 객체를 생성하는 메소드
def create(request):
    form = BlogForm(request.POST,request.FILES)
    if form.is_valid(): #폼이 유요한가?
        new_blog=form.save(commit=False) #임시저장
        new_blog.pub_date = timezone.now() #form에서 pub_date는 관리하지 않았기 때문에 별로도 저장해줘야함
        new_blog.save()  
        return redirect('detail',new_blog.id)
    return rediect('home')


#Update=========================================
#기존 게시물을 수정하는 페이지 연결 메소드
def edit(request,id):
    edit_blog = Blog.objects.get(id=id)
    return render(request,'edit.html',{'edit_blog':edit_blog})

#수정된 게시물을 저장하는 메소드
def update(request,id):
    update_blog = Blog.objects.get(id=id) #존재하는 객체중 id일치하는 객체 가져옴
    update_blog.title = request.POST['title'] #from edit.html action
    update_blog.writer = request.POST['writer']
    update_blog.body = request.POST['body']
    update_blog.pub_date = timezone.now()
    update_blog.save()
    return redirect('detail',update_blog.id)
#Delete=========================================
def delete(request,id):
    delete_blog = Blog.objects.get(id=id)
    delete_blog.delete()
    return redirect('mainPage')