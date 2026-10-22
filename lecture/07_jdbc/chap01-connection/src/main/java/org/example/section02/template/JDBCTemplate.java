package org.example.section02.template;

import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.util.Properties;

public class JDBCTemplate {

    public static Connection getConnection() {

        Connection con = null;
        Properties prop = new Properties();
        // Java에서 설정 정보를 Key(키)와 Value(값) 형태로 저장하고 관리하는 클래스
        // Map 자료구조를 이용해 설정값을 저장

        /*
        * DB 연결 정보를 Java 코드와 분리해서 관리하기 위해 사용
        *
        *
        * */

        try (FileReader reader = new FileReader("src/main/java/config/jdbc-config.properties")) {
            // filereader: 외부 텍스트 파일의 내용을 Java 프로그램에서 읽을 수 있도록 해주는 클래스
            prop.load(reader);
            // load(): 외부 파일에 저장된 key=value 형식으로 데이터를 읽어서 Properties 객체에 저장하는 메서드

            String driver = prop.getProperty("driver");
            String url = prop.getProperty("url");
            // key 값인 driver와 url을 읽어옴
            /*
            * com.mysql.cj.jdbc.Driver
            * jdbc:mysql://localhost/menudb
            * */


            Class.forName(driver); // 드라이버를 읽어옴

            con = DriverManager.getConnection(url,prop);
            // getConnection(String url, Properties info);
            // 매개변수하나와 객체를 전달 받음

        } catch (FileNotFoundException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        } catch (ClassNotFoundException e) {
            throw new RuntimeException(e);
        } catch (SQLException e) {
            throw new RuntimeException(e);
        }

        return con;
    }

    public static void close(Connection con) {
        try {
            if(con != null && !con.isClosed()) {
                con.close();
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
}
