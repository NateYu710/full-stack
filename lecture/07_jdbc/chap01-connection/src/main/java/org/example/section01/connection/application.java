package org.example.section01.connection;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class application {
    public static void main(String[] args) {
        /*
         * Connection
         * - 자바 어플리케이션과 db사이에 만들어지는 연결통로
         * - DriverManager를 통해 db 접속 정보를 전달하면 connection 객체를 얻을 수 있다
         * */

        Connection con = null;
        // 사용할 jdbc driver 클래스를 로딩한다//


        try {
            Class.forName("com.mysql.cj.jdbc.Driver");
            // MySQL JDBC 드라이버 클래스를 찾아 메모리에 로딩하는 코드


            // DriverManager.getConnection(url, user, password)
            con = DriverManager.getConnection("jdbc:mysql://localhost/menudb" , "ohgiraffers", "ohgiraffers");

            System.out.println(con);

        } catch (ClassNotFoundException e) {
            // Java가 지정된 클래스를 찾지 못했을 때 발생하는 예외 클래스
            // Checked Exception
            // 드라이버 클래스가 없을시 발생하는 에러
            throw new RuntimeException(e);
        } catch (SQLException e) {
            // Java에서 JDBC를 사용해 데이터베이스 작업을 수행할 때 발생하는 예외 클래스
            throw new RuntimeException(e);
        } finally {
            if(con != null) {
                try {
                    if(!con.isClosed()) {
                        // connection 객체가 닫치지 않았다면
                        con.close(); // 실제 DB 연결을 종료
                    }
                } catch (SQLException e) {
                    throw new RuntimeException(e);
                }
            }
        }

    }

}
