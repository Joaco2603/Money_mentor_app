export interface User {
  name: string;
  last_name: string;
  email: string;
  born: string;
  isActive: boolean;
  rol: { id: number };
  token: string;
  business_topic_user?: number | undefined;
  test_evaluated?: string | undefined;
}
