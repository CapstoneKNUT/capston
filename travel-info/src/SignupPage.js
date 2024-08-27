// components/SignupPage.js
import React, { useState } from 'react';
import { GoogleOAuthProvider, GoogleLogin } from 'react-oauth/google';
import './SignupPage';

function SignupPage() {
  const [nickname, setNickname] = useState('');
  const [termsAccepted, setTermsAccepted] = useState({
    termsOfService: false,
    privacyPolicy: false,
    marketingConsent: false,
  });

  const handleInputChange = (e) => {
    const { name, checked } = e.target;
    setTermsAccepted((prev) => ({
      ...prev,
      [name]: checked,
    }));
  };

  const handleSignup = () => {
    if (!termsAccepted.termsOfService || !termsAccepted.privacyPolicy) {
      alert('필수 약관에 동의해야 합니다.');
      return;
    }
    // 회원가입 로직 추가
    alert('회원가입 완료!');
  };

  return (
    <div className="signup-page">
      <div className="sns-login">
        <h2>SNS 간편로그인</h2>
        <div className="sns-buttons">
          <GoogleOAuthProvider clientId="YOUR_GOOGLE_CLIENT_ID">
            <GoogleLogin
              onSuccess={(credentialResponse) => {
                console.log(credentialResponse);
              }}
              onError={() => {
                console.log('Login Failed');
              }}>
              </GoogleLogin>
          </GoogleOAuthProvider>
          <button className="google">구글플러스</button>
          <button className="facebook">페이스북</button>
          <button className="naver">네이버</button>
          <button className="kakao">카카오톡</button>
        </div>
      </div>

      <div className="manual-signup">
        <h2>회원가입</h2>
        <input
          type="text"
          placeholder="닉네임"
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
        />
        <p>한글, 영문, 숫자 사용 가능 합니다.</p>
        <div className="terms">
          <div>
            <input
              type="checkbox"
              name="termsOfService"
              checked={termsAccepted.termsOfService}
              onChange={handleInputChange}
            />
            <label>[필수] 이용약관 동의</label>
          </div>
          <div>
            <input
              type="checkbox"
              name="privacyPolicy"
              checked={termsAccepted.privacyPolicy}
              onChange={handleInputChange}
            />
            <label>[필수] 개인정보 수집 및 이용 동의</label>
          </div>
          <div>
            <input
              type="checkbox"
              name="marketingConsent"
              checked={termsAccepted.marketingConsent}
              onChange={handleInputChange}
            />
            <label>[선택] 마케팅 정보 수신동의</label>
          </div>
        </div>
        <button onClick={handleSignup}>가입완료</button>
      </div>
    </div>
  );
}

export default SignupPage;
