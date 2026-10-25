package com.ohgiraffers.section02.preparedstatement;

import com.ohgiraffers.model.dto.MenuDTO;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

import static com.ohgiraffers.common.JDBCTemplate.close;
import static com.ohgiraffers.common.JDBCTemplate.getConnection;

public class Application2 {
    public static void main(String[] args) {
        /* TBL_MENU 테이블에서 메뉴 이름의 첫 글자를 입력 받아 해당 메뉴 정보들을 모두 출력 */

        Connection con = getConnection();
        PreparedStatement pstmt = null;
        ResultSet rset = null;
        List<MenuDTO> menuList = null;

        Scanner sc = new Scanner(System.in);
        System.out.print("조회할 메뉴의 첫글자를 입력하세요 : ");
        String menuName = sc.nextLine();

        String query = "SELECT * FROM TBL_MENU WHERE MENU_NAME LIKE CONCAT(?, '%')";
        // menu_name like '..%' 하고 같은 의미 즉 시작 단어

        try {
            pstmt = con.prepareStatement(query);
            pstmt.setString(1, menuName);


            System.out.println(pstmt);
            // com.mysql.cj.jdbc.ClientPreparedStatement:
            // SELECT * FROM TBL_MENU WHERE MENU_NAME LIKE CONCAT('삼', '%')
            // MySQL JDBC 드라이버가 구현한 PreparedStatement 객체의 클래스 이름과 SQL문이 출력

            rset = pstmt.executeQuery();
            menuList = new ArrayList<>();

            while(rset.next()) {
                MenuDTO row = new MenuDTO(); // 필드값을 꺼내기위해서 선언

                row.setMenuCode(rset.getInt("MENU_CODE"));
                row.setMenuName(rset.getString("MENU_NAME"));
                row.setMenuPrice(rset.getInt("MENU_PRICE"));
                row.setCategoryCode(rset.getInt("CATEGORY_CODE"));
                row.setOrderableStatus(rset.getString("ORDERABLE_STATUS"));

                menuList.add(row);
            }

        } catch (SQLException e) {
            e.printStackTrace();
        } finally {
            close(rset);
            close(pstmt);
            close(con);
        }

        for(MenuDTO menu : menuList) {
            System.out.println(menu);
            /*
            * MenuDTO{menuCode=33, menuName='삼겹살', menuPrice=12000, categoryCode=4, orderableStatus='Y'}
            * */
        }


    }
}
