export class CMovie {
    title: string;
    overview?: string;

    constructor(data?: any) {
        this.title = '';
        this.overview = '';
        if (data) {
          this.fromAPI(data);
        }
      }
      
      fromAPI(data: any) {
          this.title = data.title;
          this.overview = data.overview;
      }
}


