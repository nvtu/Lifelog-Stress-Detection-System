from datetime import datetime, timedelta


def generate_expiration_time(duration_in_sec: int) -> datetime:
    expired_time = datetime.now() + timedelta(seconds=duration_in_sec)
    return expired_time


def is_time_expired(expired_time: datetime) -> bool:
    expired = (expired_time - datetime.now()).total_seconds() < 0
    return expired
    