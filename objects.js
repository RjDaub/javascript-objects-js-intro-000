var playlist = {
  'Foo Fighters': 'Everlong',
  Prince: 'Purple Rain'
}

function updatePlaylist(playlist, artist, song) {
  playlist['Nirvana'] = 'Aneurysm'
  return playlist
}

function removeFromPlaylist(playlist, artist) {
  delete playlist[]
}