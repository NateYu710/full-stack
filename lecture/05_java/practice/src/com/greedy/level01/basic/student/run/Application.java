package com.greedy.level01.basic.student.run;
import com.greedy.level01.basic.student.model.dto.StudentDTO;

import java.util.Scanner;

public class Application {
    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);
        StudentDTO[] studentDto = new StudentDTO[10];
        int count = 0;
        while(count != studentDto.length) {
            System.out.print("학년 : ");
            int grade = sc.nextInt();
            System.out.print("반 : ");
            int classroom = sc.nextInt();
            System.out.print("이름 : ");
            String name = sc.next();
            System.out.print("국어 : ");
            int kor = sc.nextInt();
            System.out.print("영어 : ");
            int eng = sc.nextInt();
            System.out.print("수학 : ");
            int math = sc.nextInt();
            studentDto[count] = new StudentDTO(grade, classroom, name, kor, eng, math);

            System.out.print("계속 추가할 겁니까 ? (y/n) : ");
            char choice = sc.next().toUpperCase().charAt(0);

            if(choice == 'N') {
                break;
            } else if (choice == 'Y') {
                count++;
                continue;
            } else {
                while(choice != 'Y' && choice !='N') {
                    System.out.println("잘못된 입력입니다.");
                    System.out.print("계속 추가할 겁니까 ? (y/n) : ");
                    choice = sc.next().toUpperCase().charAt(0);
                }
                count++;
                break;
            }

        }
        for(StudentDTO studentDto2 : studentDto) {
            if(studentDto2 != null) {
                System.out.println(studentDto2.getInformation());
            }
        }




    }
}
