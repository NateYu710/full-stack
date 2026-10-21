package com.ohgiraffers.section03;

import java.io.FileNotFoundException;
import java.io.IOException;

public class subClass extends SuperClass {

    // 허용
    //    @Override
//    public void method()  {
//        // 자식 메소드에서는 throws를 궂이 상속안받아도 된다..
//    }

// 같은 범위 허용

//    @Override
//    public void method() throws IOException {
//        super.method();
//    }


// 부모보다 더 구체적인 범위는 허용
//    @Override
//    public void method() throws FileNotFoundException {
//        // FileNotFoundException -> ioexception 하위
//    }

    // 부모보다 더 넓은 범위는 허용하지 않는다
//    public void method() throws Exception {}
//

}
