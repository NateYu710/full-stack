package com.hw1.view;

import java.util.Scanner;
import com.hw1.controller.LibraryManager;

public class LibraryMenu {
    private LibraryManager lm = new LibraryManager();
    private Scanner sc = new Scanner(System.in);

    public void mainMenu() {}

    public void selectAll() {}

    public void searchBook() {}

    public void rentBook() {}

    public LibraryManager getLm() {
        return lm;
    }

    public void setLm(LibraryManager lm) {
        this.lm = lm;
    }

    public Scanner getSc() {
        return sc;
    }

    public void setSc(Scanner sc) {
        this.sc = sc;
    }
}
