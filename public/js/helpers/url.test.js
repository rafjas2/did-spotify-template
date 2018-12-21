import {gstHashParams, getHashParams} from "./url";
//https://did-spotify-template.herokuapp.com/battle/#access_token=BQAnRUDRCSyudlnkr3HP5KwhaLmjsHj2dPXewQJptkRhXKdBt5cOOAeDBUXzx5qv_e71P99XQIL7YdNzSVj7DL0-2rr4Htj361LwQVmt7coIGwawfrhwpob9i5Jt3th7oJB05DOd7a2CZ1EPxqwl7_y2y5GddFSdFqcgqgRG_5LWK-HlqMf3FQ&token_type=Bearer&expires_in=3600&state=Q3ZaB8LSSQSdpO9G
describe("This is testing url.js", () => {
    test("Testing getHashParams", () => {
        const token = "BQAnRUDRCSyudlnkr3HP5KwhaLmjsHj2dPXewQJptkRhXKdBt5cOOAeDBUXzx5qv_e71P99XQIL7YdNzSVj7DL0-2rr4Htj361LwQVmt7coIGwawfrhwpob9i5Jt3th7oJB05DOd7a2CZ1EPxqwl7_y2y5GddFSdFqcgqgRG_5LWK-HlqMf3FQ"
        const state = "Q3ZaB8LSSQSdpO9G"
        const params= getHashParams();
        expect(params.access_token).toBe(token);
        expect(params.state).toBe(state); 
    });  
})