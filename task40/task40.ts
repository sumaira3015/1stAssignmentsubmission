// Album: Write a function called make_album() that builds a Object describing a music album.
function make_album(artist:string, title:string , tracks? : number):
    {artist:string, title:string , tracks? : number}

{
const album={
    artist,
    title,
    tracks
};
if(tracks !== undefined){
    album.tracks = tracks;
}
return album;
}
// example function call
const album1 = make_album(`vitel signs`, `hum tum`);
const album2 = make_album(`Artist2`, `Album2`,8);
const album3 = make_album(`Artist1`, `Album3`,15);


console.log(album1);
console.log(album2);
console.log(album3);