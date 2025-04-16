import { IActor } from "@/lib/features/actor/domain/Actor";

class MakeRequests {
  private baseURL: string;

  constructor(baseURL: string) {
    this.baseURL = baseURL;
  }
  
  public async getActors(): Promise<IActor[]> {
    const response = await fetch(`${this.baseURL}actors`, 
      { 
        method: "GET",
        headers: { "Content-Type": "application/json" },
      }
    );
    if(!response.ok) {
      throw new Error(`Error al realizar la peticion: ${response.statusText}`);
    }
    const data = await response.json();
    return data;
  }
}

const api: MakeRequests = new MakeRequests(
  process.env.NEXT_PUBLIC_API_URL!
);

export default api;