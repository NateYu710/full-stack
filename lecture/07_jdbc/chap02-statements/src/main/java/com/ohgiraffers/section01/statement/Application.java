package com.ohgiraffers.section01.statement;


import java.sql.Connection;
import java.sql.SQLException;
import java.sql.Statement;
import java.sql.ResultSet;

import static com.ohgiraffers.common.JDBCTemplate.getConnection;

public class Application {
    public static void main(String[] args) {

        Statement stmt = null; // SQL문을 데이터베이스에 전달하고 실행하는 역할
        ResultSet rset = null; // SELECT문을 실행한 결과를 저장하고 조회하는 역할

        Connection con = getConnection();
        // DB 연결 객체(Connection)를 이용해 SQL문을 실행할 수 있는 Statement 객체를 생성

        try {
            stmt = con.createStatement();
            rset = stmt.executeQuery("select menu_name, menu_price from tbl_menu");

            while(rset.next()) { // ResultSet에서 다음 행(Row)으로 이동하는 메서드
                System.out.println(rset.getString("menu_name") + ", " +
                        rset.getInt("menu_price"));
            }
        } catch (SQLException e) {
            throw new RuntimeException(e);
        }
    }
}
