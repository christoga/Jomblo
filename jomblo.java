import javax.swing.JOptionPane;

public class Jomblo {
	public static void main(String[] args){
		String name = "";
		name = JOptionPane.showInputDialog("Siapa namanya?");

		String msg = "Halo " + name + ",";
		JOptionPane.showMessageDialog(null, msg);
	}
}
