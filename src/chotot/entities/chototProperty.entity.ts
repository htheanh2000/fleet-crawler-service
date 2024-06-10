import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class ChototProperty {
  @PrimaryGeneratedColumn('uuid')
  id: string;

   @Column({ nullable: true })
  ad_id: string;

   @Column({ nullable: true })
  list_id: string;

   @Column({ nullable: true })
  list_time: string;

   @Column({ nullable: true })
  orig_list_time: string;

   @Column({ nullable: true })
  date: string;

   @Column({ nullable: true })
  account_id: string;

   @Column({ nullable: true })
  account_oid: string;

   @Column({ nullable: true })
  account_name: string;

   @Column({ nullable: true })
  state: string;

   @Column({ nullable: true })
  subject: string;

  @Column('text')
  body: string;

   @Column({ nullable: true })
  category: string;

   @Column({ nullable: true })
  category_name: string;

   @Column({ nullable: true })
  area: string;

   @Column({ nullable: true })
  area_name: string;

   @Column({ nullable: true })
  region: string;

   @Column({ nullable: true })
  region_name: string;

   @Column({ nullable: true })
  company_ad: boolean;

   @Column({ nullable: true })
  type: string;

   @Column({ nullable: true })
  price: string;

   @Column({ nullable: true })
  price_string: string;

   @Column({ nullable: true })
  image: string;

   @Column({ nullable: true })
  webp_image: string;

  @Column("simple-array")
  videos: string[];

   @Column({ nullable: true })
  string_of_images: string;

  @Column("simple-json")
  seller_info: { full_name: string; avatar: string; sold_ads: string; live_ads: string };

   @Column({ nullable: true })
  avatar: string;

   @Column({ nullable: true })
  rooms: string;

   @Column({ nullable: true })
  property_legal_document: string;

   @Column({ nullable: true })
  apartment_type: string;

   @Column({ nullable: true })
  size: string;

   @Column({ nullable: true })
  region_v2: string;

   @Column({ nullable: true })
  area_v2: string;

   @Column({ nullable: true })
  ward: string;

   @Column({ nullable: true })
  ward_name: string;

   @Column({ nullable: true })
  toilets: string;

   @Column({ nullable: true })
  price_million_per_m2: string;

   @Column({ nullable: true })
  deposit: string;

   @Column({ nullable: true })
  contain_videos: string;

   @Column({ nullable: true })
  location: string;

   @Column({ nullable: true })
  longitude: string;

   @Column({ nullable: true })
  latitude: string;

   @Column({ nullable: true })
  phone_hidden: boolean;

   @Column({ nullable: true })
  owner: boolean;

   @Column({ nullable: true })
  protection_entitlement: boolean;

   @Column({ nullable: true })
  escrow_can_deposit: string;

  @Column("simple-json")
  params: { id: string; value: string; label: string }[];

   @Column({ nullable: true })
  zero_deposit: boolean;

   @Column({ nullable: true })
  detail_address: string;

   @Column({ nullable: true })
  street_name: string;

   @Column({ nullable: true })
  pty_jupiter: string;

  @Column({ nullable: true })
  label_campaigns: string;

  @Column({ nullable: true })
  ad_labels: string;
}
