package ohgiraffers.section02;

public class OnlineCourse {

    private String title;
    private String Category;
    private int duration;
    private boolean free;

    public OnlineCourse(String title, String category, int duration, boolean free) {
        this.title = title;
        Category = category;
        this.duration = duration;
        this.free = free;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getCategory() {
        return Category;
    }

    public void setCategory(String category) {
        Category = category;
    }

    public int getDuration() {
        return duration;
    }

    public void setDuration(int duration) {
        this.duration = duration;
    }

    public boolean isFree() {
        return free;
    }

    public void setFree(boolean free) {
        this.free = free;
    }

    @Override
    public String toString() {
        return "OnlineCourse{" +
                "title='" + title + '\'' +
                ", Category='" + Category + '\'' +
                ", duration=" + duration +
                ", free=" + free +
                '}';
    }
}
