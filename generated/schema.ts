// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class AccountCreated extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("user", Value.fromBytes(Bytes.empty()));
    this.set("userName", Value.fromString(""));
    this.set("displayName", Value.fromString(""));
    this.set("bio", Value.fromString(""));
    this.set("image", Value.fromString(""));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save AccountCreated entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save AccountCreated entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("AccountCreated", id.toString(), this);
    }
  }

  static load(id: string): AccountCreated | null {
    return changetype<AccountCreated | null>(store.get("AccountCreated", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get user(): Bytes {
    let value = this.get("user");
    return value!.toBytes();
  }

  set user(value: Bytes) {
    this.set("user", Value.fromBytes(value));
  }

  get userName(): string {
    let value = this.get("userName");
    return value!.toString();
  }

  set userName(value: string) {
    this.set("userName", Value.fromString(value));
  }

  get displayName(): string {
    let value = this.get("displayName");
    return value!.toString();
  }

  set displayName(value: string) {
    this.set("displayName", Value.fromString(value));
  }

  get bio(): string {
    let value = this.get("bio");
    return value!.toString();
  }

  set bio(value: string) {
    this.set("bio", Value.fromString(value));
  }

  get image(): string {
    let value = this.get("image");
    return value!.toString();
  }

  set image(value: string) {
    this.set("image", Value.fromString(value));
  }
}

export class Approval extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("owner", Value.fromBytes(Bytes.empty()));
    this.set("approved", Value.fromBytes(Bytes.empty()));
    this.set("tokenId", Value.fromBigInt(BigInt.zero()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Approval entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save Approval entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("Approval", id.toString(), this);
    }
  }

  static load(id: string): Approval | null {
    return changetype<Approval | null>(store.get("Approval", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get owner(): Bytes {
    let value = this.get("owner");
    return value!.toBytes();
  }

  set owner(value: Bytes) {
    this.set("owner", Value.fromBytes(value));
  }

  get approved(): Bytes {
    let value = this.get("approved");
    return value!.toBytes();
  }

  set approved(value: Bytes) {
    this.set("approved", Value.fromBytes(value));
  }

  get tokenId(): BigInt {
    let value = this.get("tokenId");
    return value!.toBigInt();
  }

  set tokenId(value: BigInt) {
    this.set("tokenId", Value.fromBigInt(value));
  }
}

export class ApprovalForAll extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("owner", Value.fromBytes(Bytes.empty()));
    this.set("operator", Value.fromBytes(Bytes.empty()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save ApprovalForAll entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save ApprovalForAll entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("ApprovalForAll", id.toString(), this);
    }
  }

  static load(id: string): ApprovalForAll | null {
    return changetype<ApprovalForAll | null>(store.get("ApprovalForAll", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get owner(): Bytes {
    let value = this.get("owner");
    return value!.toBytes();
  }

  set owner(value: Bytes) {
    this.set("owner", Value.fromBytes(value));
  }

  get operator(): Bytes {
    let value = this.get("operator");
    return value!.toBytes();
  }

  set operator(value: Bytes) {
    this.set("operator", Value.fromBytes(value));
  }

  get approved(): boolean {
    let value = this.get("approved");
    return value!.toBoolean();
  }

  set approved(value: boolean) {
    this.set("approved", Value.fromBoolean(value));
  }
}

export class BidPlaced extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("bidder", Value.fromBytes(Bytes.empty()));
    this.set("postId", Value.fromBigInt(BigInt.zero()));
    this.set("bidAmount", Value.fromBigInt(BigInt.zero()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save BidPlaced entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save BidPlaced entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("BidPlaced", id.toString(), this);
    }
  }

  static load(id: string): BidPlaced | null {
    return changetype<BidPlaced | null>(store.get("BidPlaced", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get bidder(): Bytes {
    let value = this.get("bidder");
    return value!.toBytes();
  }

  set bidder(value: Bytes) {
    this.set("bidder", Value.fromBytes(value));
  }

  get postId(): BigInt {
    let value = this.get("postId");
    return value!.toBigInt();
  }

  set postId(value: BigInt) {
    this.set("postId", Value.fromBigInt(value));
  }

  get bidAmount(): BigInt {
    let value = this.get("bidAmount");
    return value!.toBigInt();
  }

  set bidAmount(value: BigInt) {
    this.set("bidAmount", Value.fromBigInt(value));
  }
}

export class BiddableTokenPurchased extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("oldOwner", Value.fromBytes(Bytes.empty()));
    this.set("newOwner", Value.fromBytes(Bytes.empty()));
    this.set("tokenId", Value.fromBigInt(BigInt.zero()));
  }

  save(): void {
    let id = this.get("id");
    assert(
      id != null,
      "Cannot save BiddableTokenPurchased entity without an ID"
    );
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save BiddableTokenPurchased entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("BiddableTokenPurchased", id.toString(), this);
    }
  }

  static load(id: string): BiddableTokenPurchased | null {
    return changetype<BiddableTokenPurchased | null>(
      store.get("BiddableTokenPurchased", id)
    );
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get oldOwner(): Bytes {
    let value = this.get("oldOwner");
    return value!.toBytes();
  }

  set oldOwner(value: Bytes) {
    this.set("oldOwner", Value.fromBytes(value));
  }

  get newOwner(): Bytes {
    let value = this.get("newOwner");
    return value!.toBytes();
  }

  set newOwner(value: Bytes) {
    this.set("newOwner", Value.fromBytes(value));
  }

  get tokenId(): BigInt {
    let value = this.get("tokenId");
    return value!.toBigInt();
  }

  set tokenId(value: BigInt) {
    this.set("tokenId", Value.fromBigInt(value));
  }
}

export class InfoChanged extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("displayName", Value.fromString(""));
    this.set("bio", Value.fromString(""));
    this.set("image", Value.fromString(""));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save InfoChanged entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save InfoChanged entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("InfoChanged", id.toString(), this);
    }
  }

  static load(id: string): InfoChanged | null {
    return changetype<InfoChanged | null>(store.get("InfoChanged", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get displayName(): string {
    let value = this.get("displayName");
    return value!.toString();
  }

  set displayName(value: string) {
    this.set("displayName", Value.fromString(value));
  }

  get bio(): string {
    let value = this.get("bio");
    return value!.toString();
  }

  set bio(value: string) {
    this.set("bio", Value.fromString(value));
  }

  get image(): string {
    let value = this.get("image");
    return value!.toString();
  }

  set image(value: string) {
    this.set("image", Value.fromString(value));
  }
}

export class OwnershipTransferred extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("previousOwner", Value.fromBytes(Bytes.empty()));
    this.set("newOwner", Value.fromBytes(Bytes.empty()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save OwnershipTransferred entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save OwnershipTransferred entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("OwnershipTransferred", id.toString(), this);
    }
  }

  static load(id: string): OwnershipTransferred | null {
    return changetype<OwnershipTransferred | null>(
      store.get("OwnershipTransferred", id)
    );
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get previousOwner(): Bytes {
    let value = this.get("previousOwner");
    return value!.toBytes();
  }

  set previousOwner(value: Bytes) {
    this.set("previousOwner", Value.fromBytes(value));
  }

  get newOwner(): Bytes {
    let value = this.get("newOwner");
    return value!.toBytes();
  }

  set newOwner(value: Bytes) {
    this.set("newOwner", Value.fromBytes(value));
  }
}

export class PostCreated extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("sender", Value.fromBytes(Bytes.empty()));
    this.set("uri", Value.fromString(""));
    this.set("sellValue", Value.fromBigInt(BigInt.zero()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save PostCreated entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save PostCreated entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("PostCreated", id.toString(), this);
    }
  }

  static load(id: string): PostCreated | null {
    return changetype<PostCreated | null>(store.get("PostCreated", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get sender(): Bytes {
    let value = this.get("sender");
    return value!.toBytes();
  }

  set sender(value: Bytes) {
    this.set("sender", Value.fromBytes(value));
  }

  get uri(): string {
    let value = this.get("uri");
    return value!.toString();
  }

  set uri(value: string) {
    this.set("uri", Value.fromString(value));
  }

  get buyStatus(): i32 {
    let value = this.get("buyStatus");
    return value!.toI32();
  }

  set buyStatus(value: i32) {
    this.set("buyStatus", Value.fromI32(value));
  }

  get sellValue(): BigInt {
    let value = this.get("sellValue");
    return value!.toBigInt();
  }

  set sellValue(value: BigInt) {
    this.set("sellValue", Value.fromBigInt(value));
  }
}

export class PostDetailsChanged extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("postId", Value.fromBigInt(BigInt.zero()));
    this.set("price", Value.fromBigInt(BigInt.zero()));
    this.set("bidDuration", Value.fromBigInt(BigInt.zero()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save PostDetailsChanged entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save PostDetailsChanged entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("PostDetailsChanged", id.toString(), this);
    }
  }

  static load(id: string): PostDetailsChanged | null {
    return changetype<PostDetailsChanged | null>(
      store.get("PostDetailsChanged", id)
    );
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get postId(): BigInt {
    let value = this.get("postId");
    return value!.toBigInt();
  }

  set postId(value: BigInt) {
    this.set("postId", Value.fromBigInt(value));
  }

  get status(): i32 {
    let value = this.get("status");
    return value!.toI32();
  }

  set status(value: i32) {
    this.set("status", Value.fromI32(value));
  }

  get price(): BigInt {
    let value = this.get("price");
    return value!.toBigInt();
  }

  set price(value: BigInt) {
    this.set("price", Value.fromBigInt(value));
  }

  get bidDuration(): BigInt {
    let value = this.get("bidDuration");
    return value!.toBigInt();
  }

  set bidDuration(value: BigInt) {
    this.set("bidDuration", Value.fromBigInt(value));
  }
}

export class PostRewardClaimed extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("user", Value.fromBytes(Bytes.empty()));
    this.set("postId", Value.fromBigInt(BigInt.zero()));
    this.set("reward", Value.fromBigInt(BigInt.zero()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save PostRewardClaimed entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save PostRewardClaimed entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("PostRewardClaimed", id.toString(), this);
    }
  }

  static load(id: string): PostRewardClaimed | null {
    return changetype<PostRewardClaimed | null>(
      store.get("PostRewardClaimed", id)
    );
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get user(): Bytes {
    let value = this.get("user");
    return value!.toBytes();
  }

  set user(value: Bytes) {
    this.set("user", Value.fromBytes(value));
  }

  get postId(): BigInt {
    let value = this.get("postId");
    return value!.toBigInt();
  }

  set postId(value: BigInt) {
    this.set("postId", Value.fromBigInt(value));
  }

  get reward(): BigInt {
    let value = this.get("reward");
    return value!.toBigInt();
  }

  set reward(value: BigInt) {
    this.set("reward", Value.fromBigInt(value));
  }
}

export class PostSold extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("from", Value.fromBytes(Bytes.empty()));
    this.set("to", Value.fromBytes(Bytes.empty()));
    this.set("amount", Value.fromBigInt(BigInt.zero()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save PostSold entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save PostSold entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("PostSold", id.toString(), this);
    }
  }

  static load(id: string): PostSold | null {
    return changetype<PostSold | null>(store.get("PostSold", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get from(): Bytes {
    let value = this.get("from");
    return value!.toBytes();
  }

  set from(value: Bytes) {
    this.set("from", Value.fromBytes(value));
  }

  get to(): Bytes {
    let value = this.get("to");
    return value!.toBytes();
  }

  set to(value: Bytes) {
    this.set("to", Value.fromBytes(value));
  }

  get amount(): BigInt {
    let value = this.get("amount");
    return value!.toBigInt();
  }

  set amount(value: BigInt) {
    this.set("amount", Value.fromBigInt(value));
  }
}

export class Transfer extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("from", Value.fromBytes(Bytes.empty()));
    this.set("to", Value.fromBytes(Bytes.empty()));
    this.set("tokenId", Value.fromBigInt(BigInt.zero()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Transfer entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save Transfer entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("Transfer", id.toString(), this);
    }
  }

  static load(id: string): Transfer | null {
    return changetype<Transfer | null>(store.get("Transfer", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get from(): Bytes {
    let value = this.get("from");
    return value!.toBytes();
  }

  set from(value: Bytes) {
    this.set("from", Value.fromBytes(value));
  }

  get to(): Bytes {
    let value = this.get("to");
    return value!.toBytes();
  }

  set to(value: Bytes) {
    this.set("to", Value.fromBytes(value));
  }

  get tokenId(): BigInt {
    let value = this.get("tokenId");
    return value!.toBigInt();
  }

  set tokenId(value: BigInt) {
    this.set("tokenId", Value.fromBigInt(value));
  }
}

export class User extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("address", Value.fromBytes(Bytes.empty()));
    this.set("userName", Value.fromString(""));
    this.set("displayName", Value.fromString(""));
    this.set("bio", Value.fromString(""));
    this.set("image", Value.fromString(""));
    this.set("rewardClaimed", Value.fromBigInt(BigInt.zero()));
    this.set("createdAt", Value.fromBigInt(BigInt.zero()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save User entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save User entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("User", id.toString(), this);
    }
  }

  static load(id: string): User | null {
    return changetype<User | null>(store.get("User", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get address(): Bytes {
    let value = this.get("address");
    return value!.toBytes();
  }

  set address(value: Bytes) {
    this.set("address", Value.fromBytes(value));
  }

  get userName(): string {
    let value = this.get("userName");
    return value!.toString();
  }

  set userName(value: string) {
    this.set("userName", Value.fromString(value));
  }

  get displayName(): string {
    let value = this.get("displayName");
    return value!.toString();
  }

  set displayName(value: string) {
    this.set("displayName", Value.fromString(value));
  }

  get bio(): string {
    let value = this.get("bio");
    return value!.toString();
  }

  set bio(value: string) {
    this.set("bio", Value.fromString(value));
  }

  get image(): string {
    let value = this.get("image");
    return value!.toString();
  }

  set image(value: string) {
    this.set("image", Value.fromString(value));
  }

  get rewardClaimed(): BigInt {
    let value = this.get("rewardClaimed");
    return value!.toBigInt();
  }

  set rewardClaimed(value: BigInt) {
    this.set("rewardClaimed", Value.fromBigInt(value));
  }

  get postsCreated(): Array<string> {
    let value = this.get("postsCreated");
    return value!.toStringArray();
  }

  set postsCreated(value: Array<string>) {
    this.set("postsCreated", Value.fromStringArray(value));
  }

  get postsOwn(): Array<string> {
    let value = this.get("postsOwn");
    return value!.toStringArray();
  }

  set postsOwn(value: Array<string>) {
    this.set("postsOwn", Value.fromStringArray(value));
  }

  get createdAt(): BigInt {
    let value = this.get("createdAt");
    return value!.toBigInt();
  }

  set createdAt(value: BigInt) {
    this.set("createdAt", Value.fromBigInt(value));
  }
}

export class Post extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("creator", Value.fromString(""));
    this.set("owner", Value.fromString(""));
    this.set("uri", Value.fromString(""));
    this.set("sellValue", Value.fromBigInt(BigInt.zero()));
    this.set("transferHistory", Value.fromStringArray(new Array(0)));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Post entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save Post entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("Post", id.toString(), this);
    }
  }

  static load(id: string): Post | null {
    return changetype<Post | null>(store.get("Post", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get creator(): string {
    let value = this.get("creator");
    return value!.toString();
  }

  set creator(value: string) {
    this.set("creator", Value.fromString(value));
  }

  get owner(): string {
    let value = this.get("owner");
    return value!.toString();
  }

  set owner(value: string) {
    this.set("owner", Value.fromString(value));
  }

  get uri(): string {
    let value = this.get("uri");
    return value!.toString();
  }

  set uri(value: string) {
    this.set("uri", Value.fromString(value));
  }

  get buyStatus(): i32 {
    let value = this.get("buyStatus");
    return value!.toI32();
  }

  set buyStatus(value: i32) {
    this.set("buyStatus", Value.fromI32(value));
  }

  get sellValue(): BigInt {
    let value = this.get("sellValue");
    return value!.toBigInt();
  }

  set sellValue(value: BigInt) {
    this.set("sellValue", Value.fromBigInt(value));
  }

  get transferHistory(): Array<string> {
    let value = this.get("transferHistory");
    return value!.toStringArray();
  }

  set transferHistory(value: Array<string>) {
    this.set("transferHistory", Value.fromStringArray(value));
  }
}

export class Change extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("block", Value.fromBigInt(BigInt.zero()));
    this.set("postId", Value.fromString(""));
    this.set("post", Value.fromString(""));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Change entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save Change entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("Change", id.toString(), this);
    }
  }

  static load(id: string): Change | null {
    return changetype<Change | null>(store.get("Change", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get block(): BigInt {
    let value = this.get("block");
    return value!.toBigInt();
  }

  set block(value: BigInt) {
    this.set("block", Value.fromBigInt(value));
  }

  get postId(): string {
    let value = this.get("postId");
    return value!.toString();
  }

  set postId(value: string) {
    this.set("postId", Value.fromString(value));
  }

  get post(): string {
    let value = this.get("post");
    return value!.toString();
  }

  set post(value: string) {
    this.set("post", Value.fromString(value));
  }
}

export class UserChange extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("block", Value.fromBigInt(BigInt.zero()));
    this.set("userAddress", Value.fromBytes(Bytes.empty()));
    this.set("user", Value.fromString(""));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save UserChange entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save UserChange entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("UserChange", id.toString(), this);
    }
  }

  static load(id: string): UserChange | null {
    return changetype<UserChange | null>(store.get("UserChange", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get block(): BigInt {
    let value = this.get("block");
    return value!.toBigInt();
  }

  set block(value: BigInt) {
    this.set("block", Value.fromBigInt(value));
  }

  get userAddress(): Bytes {
    let value = this.get("userAddress");
    return value!.toBytes();
  }

  set userAddress(value: Bytes) {
    this.set("userAddress", Value.fromBytes(value));
  }

  get user(): string {
    let value = this.get("user");
    return value!.toString();
  }

  set user(value: string) {
    this.set("user", Value.fromString(value));
  }
}