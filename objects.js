var playlist = {
  PearlJam: 'Black',
  Soundgarden: 'Spoon Man',
  Rush: '2112',
  Metallica: 'One'
};

function updatePlaylist(list, artistName, songTitle){
  list [artistName] = songTitle
  return list
}
updatePlaylist(playlist, 'Pink Floyd', 'The Wall' )

// function removeFromPlaylist(list, artistName){
//   delete list.artistName;
//   console.log(list);
//   return list;
// }
// removeFromPlaylist(playlist, 'Rush');
