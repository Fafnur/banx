import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({
  name: 'fingerprints_geolocation',
})
export class FingerprintGeolocationEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: 'tinytext' })
  visitor!: string;

  @Column({ type: 'tinytext', nullable: true })
  process!: string;

  @Column({ type: 'tinytext' })
  fingerprint!: string;

  @Column({ type: 'json', nullable: true })
  data!: Record<string, any>;

  @CreateDateColumn({ name: 'created_at' })
  createdAt!: string;
}
