import java.util.Scanner;

public class main {
    public static void main(String[] args) {
            Scanner scanner = new Scanner(System.in);
            System.out.println("Meu primeiro programa em java!");
            System.out.println("escolha um numero");
            System.out.println("[1] adição");
            System.out.println("[2] subtração");
            System.out.println("[3] multiplicacao");
            System.out.println("[4] divisao");
            int escolha = scanner.nextInt();

            if (escolha == 1) {
           
               int resultado = soma(scanner);
                System.out.println("a soma e:" + resultado);
            } else if (escolha == 2) {
                int resultado = subtracao(scanner);
                System.out.println((resultado));
            }
             else if (escolha == 3) {
                int resultado = multi(scanner);
                System.out.println((resultado));
            }
             else if (escolha == 4) {
                int resultado = divisao(scanner);
                System.out.println((resultado));
            }
    
    
         
    
        }

        public static int soma(Scanner scanner) {
            System.out.println("Digite um numero:");
            int num1 = scanner.nextInt();
            System.out.println("Digite outro numero: ");
            int num2 = scanner.nextInt();
            int resultado = num1 + num2;
            return resultado;
            
        }

        public static int subtracao(Scanner scanner) {
            System.out.println("Digite um numero:");
            int num1 = scanner.nextInt();
            System.out.println("Digite outro numeo: ");;
            int num2 = scanner.nextInt();
            int resultado = num1 - num2;
            return resultado;
        }
        public static int multi(Scanner scanner) {
            System.out.println("Digite um numero:");
            int num1 = scanner.nextInt();
            System.out.println("Digite outro numeo: ");;
            int num2 = scanner.nextInt();
            int resultado = num1 * num2;
            return resultado;
        }
        public static int divisao(Scanner scanner) {
            System.out.println("Digite um numero:");
            int num1 = scanner.nextInt();
            System.out.println("Digite outro numeo: ");;
            int num2 = scanner.nextInt();
            int resultado = num1 / num2;
            return resultado;
        }
    
    
    

    }
