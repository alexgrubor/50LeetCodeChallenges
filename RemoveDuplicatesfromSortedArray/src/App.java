import java.util.Arrays;

public class App {
    public int removeDuplicates(int[] nums) {
        if (nums.length == 0) return 0;

        int k = 1; 
        for (int i = 1; i < nums.length; i++) {
            if (nums[i] != nums[i - 1]) {
                nums[k] = nums[i];
                k++;
            }
        }
        Arrays.fill(nums, k, nums.length, -1);

        return k;
    }
    public static void main(String[] args) throws Exception {
    
        App app = new App();
        int[] nums = {1,1,2};
        int k = app.removeDuplicates(nums);
        System.out.println("Output: " + k );
        System.out.println("Output: " + Arrays.toString(nums) );

        int[] nums2 = {0, 0, 1, 1, 1, 2, 2, 3, 3, 4};
        k = app.removeDuplicates(nums2);
        System.out.println("Output: " + k );
        System.out.println("Output: " + Arrays.toString(nums2) );





    }
}
