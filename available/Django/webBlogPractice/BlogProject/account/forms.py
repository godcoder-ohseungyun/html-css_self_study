from django.contrib.auth.forms import UserCreationForm
from .models import CustomUser

class RegisterForm(UserCreationForm): #UserCreationForm을 사용자 정의 class에 상속시켜준다.
    class Meta:
        model = CustomUser #.models의 유저 class 받아옴
        fields = ['username','password1','password2','nickname','location','university'] #UserCreationForm의 칼럼들과 CustonUser의 칼럼을 모두 이용


        