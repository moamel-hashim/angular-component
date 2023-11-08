export class SportsService {
  getSport(): { [key: string]: string[] } {
    return {
      hokey: ['Los Angeles Kings', 'Anaheim Ducks'],
      baseball: [
        'Los Angeles Dodgers',
        'Los Angeles of Anaheim',
        'San Diego Padres',
      ],
    };
  }
}
